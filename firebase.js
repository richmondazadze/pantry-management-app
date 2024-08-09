// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYPZusFFdjOOd9XpWt51v6xwi3mUQ9Ru0",
  authDomain: "pantry-management-55082.firebaseapp.com",
  projectId: "pantry-management-55082",
  storageBucket: "pantry-management-55082.appspot.com",
  messagingSenderId: "784345798671",
  appId: "1:784345798671:web:de0b6ebabff9f713d8ab7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
