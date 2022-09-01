// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjploDfAC7EmrIi1WUgpcxCBqSXyILulg",
  authDomain: "copypaste-ad.firebaseapp.com",
  projectId: "copypaste-ad",
  storageBucket: "copypaste-ad.appspot.com",
  messagingSenderId: "916334535288",
  appId: "1:916334535288:web:6952eca58703643df3038d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const db = getFirestore(app);
export { db, storage };