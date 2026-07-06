/* ============================================================
   NEBULA – náhodný video/text chat · zdieľaná konfigurácia
   Verzia 1.0.0
   ------------------------------------------------------------
   NASTAVENIE (raz):
   1. Vytvor NOVÝ Firebase projekt: https://console.firebase.google.com
   2. Project settings → „Your apps“ → Web (</>) → skopíruj sem FIREBASE_CONFIG
   3. Build → Authentication → Sign-in method → zapni Anonymous + Email/Password
   4. Build → Firestore Database → Create database (production mode)
   5. Firestore → Rules → vlož obsah firestore.rules a Publish
   6. Do ADMIN_EMAILS nižšie vlož svoj admin e-mail
      (ten istý e-mail musí byť v zozname adminov aj vo firestore.rules!)
   ============================================================ */

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBzoydTMlJdqgXv2UncwrbBOw9li2JWL1w",
  authDomain: "randomchat-c1665.firebaseapp.com",
  projectId: "randomchat-c1665",
  storageBucket: "randomchat-c1665.firebasestorage.app",
  messagingSenderId: "862473792342",
  appId: "1:862473792342:web:37675862fccda6f64d84f7"
};

/* Admin účet(y) – musia byť zaregistrované v appke cez e-mail + heslo.
   Rovnaké e-maily daj aj do firestore.rules (funkcia isAdmin). */
const ADMIN_EMAILS = ["foresttt11@outlook.com"];

/* WebRTC ICE servery – verejný STUN od Googlu + free TURN fallback (openrelay).
   Zahŕňa aj TURN cez TCP a TLS (port 443) — mobilné/firemné siete často blokujú
   čisté UDP spojenia, takže tieto záložné varianty výrazne zvyšujú šancu na
   úspešné prepojenie aj pri slabom signáli alebo prísnom firewalle.
   Pre produkciu odporúčam vlastný TURN (napr. metered.ca free účet) kvôli spoľahlivosti. */
const ICE_SERVERS = {
  iceServers: [
    { urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] },
    { urls: "turn:openrelay.metered.ca:80",  username: "openrelayproject", credential: "openrelayproject" },
    { urls: "turn:openrelay.metered.ca:80?transport=tcp",  username: "openrelayproject", credential: "openrelayproject" },
    { urls: "turn:openrelay.metered.ca:443", username: "openrelayproject", credential: "openrelayproject" },
    { urls: "turn:openrelay.metered.ca:443?transport=tcp", username: "openrelayproject", credential: "openrelayproject" },
    { urls: "turns:openrelay.metered.ca:443?transport=tcp", username: "openrelayproject", credential: "openrelayproject" }
  ],
  iceCandidatePoolSize: 4
};

const APP_VERSION = "1.0.0";
