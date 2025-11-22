// Firebase initialization — inserted from user-provided config
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD2TvqiXL8dqdirSfSz7powJrp-xskPPCo",
  authDomain: "studio-3241497559-4ae11.firebaseapp.com",
  databaseURL: "https://studio-3241497559-4ae11-default-rtdb.firebaseio.com",
  projectId: "studio-3241497559-4ae11",
  storageBucket: "studio-3241497559-4ae11.firebasestorage.app",
  messagingSenderId: "356532717004",
  appId: "1:356532717004:web:32b22cb83338b41a648969",
  measurementId: "G-5LDBPCBGG4"
};

const app = initializeApp(firebaseConfig);
// analytics may fail in non-browser environments — export safely
let analytics;
try { analytics = getAnalytics(app); } catch(e){ /* ignore - not a browser at build time */ }

export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
