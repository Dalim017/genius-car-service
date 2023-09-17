// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBteTBRsR7Nl7Ge9QVLvL-hqpi1VRoCC3w",
  authDomain: "genius-car-service-d54cd.firebaseapp.com",
  projectId: "genius-car-service-d54cd",
  storageBucket: "genius-car-service-d54cd.appspot.com",
  messagingSenderId: "436250769399",
  appId: "1:436250769399:web:70cf9a9a740246c69c20f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;