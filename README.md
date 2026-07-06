# NEBULA — náhodný video/text chat

Omegle-štýl náhodný video a text chat. Beží kompletne na **Firebase Spark (zdarma)** +
**GitHub Pages**. Bez servera: video/audio ide priamo medzi ľuďmi (**WebRTC P2P**),
Firestore slúži len na spárovanie a signaling.

## Čo appka vie
- 🎲 Náhodné párovanie prihlásených ľudí (bez registrácie, cez anonymné prihlásenie)
- ⏭ Tlačidlo **Ďalej** — okamžite ďalší voľný účastník
- 🎥 Video + audio naživo (WebRTC), prepínanie kamery/mikrofónu
- 💬 Textový chat + 😊 emotikony + 🎙️ hlasové správy (do 1 min)
- 🌍 Zobrazenie **krajiny partnera** (vlajka + názov, cez geo-IP v prehliadači)
- 📹 Filter „len ľudia so zapnutou kamerou“
- 🔑 Voliteľná registrácia (e-mail + heslo) → každý dostane **kód** (napr. `NB-4F7B2K`)
     a cez kód sa dá spustiť **direct chat** priamo s konkrétnym človekom
- 🛡️ Moderovaný chat — zakázané slová sa automaticky prekryjú
- 🚩 Nahlásenie účastníka
- 🧑‍✈️ **Admin zóna** (`admin.html`): štatistiky, fronta, aktívne rozhovory + živé správy,
     mazanie správ, blokovanie používateľov, správa zakázaných slov, reporty

## Súbory
| Súbor | Popis |
|------|------|
| `index.html` | hlavná appka |
| `admin.html` | moderátorská zóna |
| `config.js` | zdieľaná konfigurácia (Firebase, admini, ICE servery) |
| `firestore.rules` | bezpečnostné pravidlá databázy |

## Nastavenie (raz)
1. **Firebase projekt** — na https://console.firebase.google.com vytvor nový projekt.
2. **Web app** — v *Project settings → Your apps → Web (`</>`)* pridaj appku a skopíruj
   `firebaseConfig` do `config.js` (`FIREBASE_CONFIG`).
3. **Authentication** — *Build → Authentication → Sign-in method* → zapni
   **Anonymous** aj **Email/Password**.
4. **Firestore** — *Build → Firestore Database → Create database* (production mode).
5. **Pravidlá** — *Firestore → Rules* → vlož obsah `firestore.rules` a **Publish**.
6. **Admin** — v `config.js` do `ADMIN_EMAILS` daj svoj e-mail a **ten istý e-mail**
   aj do `firestore.rules` (funkcia `isAdmin`). Potom sa v `index.html` zaregistruj
   tým e-mailom (alebo vytvor účet vo Firebase konzole) — týmto účtom sa prihlásiš do `admin.html`.

## Nasadenie na GitHub Pages
1. Nahraj všetky 4 súbory do repozitára (napr. `randomchat`).
2. *Settings → Pages* → Source: `main` / root → Save.
3. Appka pobeží na `https://<user>.github.io/randomchat/`,
   admin na `.../randomchat/admin.html`.

> **Dôležité:** kamera a WebRTC fungujú len cez **HTTPS**. GitHub Pages HTTPS má,
> takže je to v poriadku (lokálne otváranie cez `file://` kameru nepustí).

## Poznámky k prevádzke (Spark / zdarma)
- Signaling aj správy idú cez Firestore — pri veľkej prevádzke sleduj počet čítaní/zápisov
  (Spark má denné limity). Staré `rooms`/`queue`/`presence` doklady je vhodné občas
  premazať (dá sa doplniť jednoduchý čistiaci HTML nástroj).
- **TURN**: použitý je verejný free TURN (openrelay). Pre spoľahlivé spojenie za prísnym
  NAT/firewallom si vytvor vlastný TURN účet (napr. metered.ca free) a vlož do `ICE_SERVERS`.
- Hlasové správy sa ukladajú ako base64 priamo do správy (limit ~900 kB / do 1 min).

## Nápady na ďalšie kolo
- Skupinový chat do 4 ľudí (WebRTC mesh) pre registrovaných členov
- Automatické čistenie starých miestností
- Text-only režim (bez kamery) ako samostatná fronta
