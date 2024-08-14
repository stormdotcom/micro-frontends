
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAGmIhjqdnDpIx4g-Yn5fxU3mp99ZNFU4Y",
    authDomain: "hostspot-mobile-ims.firebaseapp.com",
    projectId: "hostspot-mobile-ims",
    storageBucket: "hostspot-mobile-ims.appspot.com",
    messagingSenderId: "903421768565",
    appId: "1:903421768565:web:0aa36af2035b90ebdc193c",
    measurementId: "G-2WFZTYTVHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth }