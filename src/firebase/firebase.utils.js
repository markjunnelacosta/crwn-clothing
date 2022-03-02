import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyDaBYOcHRRy1a3XIVnxEbT340K2K7x37YM",
    authDomain: "crwn-db-a0efe.firebaseapp.com",
    projectId: "crwn-db-a0efe",
    storageBucket: "crwn-db-a0efe.appspot.com",
    messagingSenderId: "53043530576",
    appId: "1:53043530576:web:1688d77b3a6b6a0a91ba55",
    measurementId: "G-L7ZFLGF68B"
}

initializeApp(config);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);