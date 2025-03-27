import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl10Nie2tQq60KAUmTd0-wqrp06TTfp_A",
  authDomain: "house-marketplace-app-7bc71.firebaseapp.com",
  projectId: "house-marketplace-app-7bc71",
  storageBucket: "house-marketplace-app-7bc71.firebasestorage.app",
  messagingSenderId: "788728543854",
  appId: "1:788728543854:web:02c45463bbd1a7366c047f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();