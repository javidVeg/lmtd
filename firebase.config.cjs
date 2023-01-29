// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTh2oX3WUqfFrvvQw7hLmdwDkuL03Pv2A",
  authDomain: "lmtd-f9a2c.firebaseapp.com",
  projectId: "lmtd-f9a2c",
  storageBucket: "lmtd-f9a2c.appspot.com",
  messagingSenderId: "182100662802",
  appId: "1:182100662802:web:f23ab2c53ed1078ed656cb",
  measurementId: "G-35H99GJ1P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)