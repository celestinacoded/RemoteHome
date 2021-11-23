import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBHOOkLpGSCWKUhbBdSVgPhy_rIOuWOUEA",
  authDomain: "real-estate-project-e0ec3.firebaseapp.com",
  projectId: "real-estate-project-e0ec3",
  storageBucket: "real-estate-project-e0ec3.appspot.com",
  messagingSenderId: "570426177994",
  appId: "1:570426177994:web:feece636cbdd39aac5b733",
  measurementId: "G-C4Z443PXF2"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const fireAuth = getAuth(app);


export { firestore, fireAuth };

