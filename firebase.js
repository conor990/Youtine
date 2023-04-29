// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXLbJFHUlUzOavMp8ioUTqZPgNsE5RBoY",
  authDomain: "youtine-93ad2.firebaseapp.com",
  projectId: "youtine-93ad2",
  storageBucket: "youtine-93ad2.appspot.com",
  messagingSenderId: "312149534512",
  appId: "1:312149534512:web:b081930498189629610af5",
  measurementId: "G-HVT2DNS5JS"
};

// Initialize Firebase
let app
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}


const auth = firebase.auth()

export { auth };