// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsR4abgvBv_-t1nCwSNwx5Um5fbZdCVA",
  authDomain: "bienesraices-30875.firebaseapp.com",
  projectId: "bienesraices-30875",
  storageBucket: "bienesraices-30875.appspot.com",
  messagingSenderId: "609668167169",
  appId: "1:609668167169:web:81338128b2ad3e12f2f200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);