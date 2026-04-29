import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfg_CmR3fWXz7U7R35nhRNCC243CqBXEQ",
  authDomain: "crm-69c8a.firebaseapp.com",
  projectId: "crm-69c8a",
  storageBucket: "crm-69c8a.firebasestorage.app",
  messagingSenderId: "309785361435",
  appId: "1:309785361435:web:45bb7e8f74708cef410cbe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  serverTimestamp
};
