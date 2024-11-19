// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgYleIREXbtcOLkYouwRRPlR_XPKZ4tBQ",
  authDomain: "career-counseling-websit-cc455.firebaseapp.com",
  projectId: "career-counseling-websit-cc455",
  storageBucket: "career-counseling-websit-cc455.firebasestorage.app",
  messagingSenderId: "654278135886",
  appId: "1:654278135886:web:4e0e95a09606923bbbf31f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app