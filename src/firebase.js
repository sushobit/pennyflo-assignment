// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCs4iClrRWdrz7d8v1nj7EOjT1niEg9B2U",
    authDomain: "pennyflo-5882c.firebaseapp.com",
    databaseURL: "https://pennyflo-5882c-default-rtdb.firebaseio.com",
    projectId: "pennyflo-5882c",
    storageBucket: "pennyflo-5882c.appspot.com",
    messagingSenderId: "668130656272",
    appId: "1:668130656272:web:97231abcf21078a4d20a95",
    measurementId: "G-1N9WVS17MM"
  };

// Initialize Firebase
const appp = initializeApp(firebaseConfig);

export const firestore = getFirestore(appp); 