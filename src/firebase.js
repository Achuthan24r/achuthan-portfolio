import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl4Srgt3z1Jjcb5c0kOHuw1zO6Mse9pU0",
  authDomain: "portfolio-842b6.firebaseapp.com",
  projectId: "portfolio-842b6",
  storageBucket: "portfolio-842b6.firebasestorage.app",
  messagingSenderId: "289231452828",
  appId: "1:289231452828:web:80858e13b0d1c1f575cb59",
  measurementId: "G-8XL9Z9T8G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
