/* ============================================================
   NEBULA – náhodný video/text chat · zdieľaná konfigurácia
   Verzia 1.0.0
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

/* WebRTC ICE servery */
const ICE_SERVERS = {
  iceServers: [
    { urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"] },
    { urls: "turn:openrelay.metered.ca:80",  username: "openrelayproject", credential: "openrelayproject" },
    { urls: "turn:openrelay.metered.ca:443", username: "openrelayproject", credential: "openrelayproject" }
  ]
};

const APP_VERSION = "1.0.0";
