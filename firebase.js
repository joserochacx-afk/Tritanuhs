// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// Configuração da Tritanuhs
const firebaseConfig = {
  apiKey: "AIzaSyCpQhMdNqleIGAFL5_JmZcaZzlCNXngRNM",
  authDomain: "tritanuhs.firebaseapp.com",
  projectId: "tritanuhs",
  storageBucket: "tritanuhs.firebasestorage.app",
  messagingSenderId: "97752196775",
  appId: "1:97752196775:web:c31cc6106819b6a1f65d82",
  measurementId: "G-SK10CVVR71"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Banco Firestore
const db = getFirestore(app);

export { db };