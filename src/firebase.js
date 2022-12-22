
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBo8r9J9WgkZYW4tVcxk7Wbpc6qKww06fo",
  authDomain: "new-chat-18e9f.firebaseapp.com",
  projectId: "new-chat-18e9f",
  storageBucket: "new-chat-18e9f.appspot.com",
  messagingSenderId: "514476784462",
  appId: "1:514476784462:web:d7418c8da55de9256afc1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
 export const storage = getStorage();
 export const db =getFirestore();