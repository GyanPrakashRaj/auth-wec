// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnAx12juZFEf6eUh2_uAa2YTFXtyDRDbY",
  authDomain: "tarang-login.firebaseapp.com",
  projectId: "tarang-login",
  storageBucket: "tarang-login.appspot.com",
  messagingSenderId: "418224334129",
  appId: "1:418224334129:web:cd98cfaf1321905bce7c10",
  measurementId: "G-6G5NF71EZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };