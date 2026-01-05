import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDc3dRU75aIKt3d2epRn2Xf3xXKgFGi4M",
  authDomain: "scirox-e1384.firebaseapp.com",
  projectId: "scirox-e1384",
  storageBucket: "scirox-e1384.firebasestorage.app",
  messagingSenderId: "648970043160",
  appId: "1:648970043160:web:3d134246d0e67b0526e86d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
