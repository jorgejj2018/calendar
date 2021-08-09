import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB07IjfHTQkHTuNzmFAgWteH4iKbyUcRRU",
  authDomain: "pruebageek-1feaf.firebaseapp.com",
  projectId: "pruebageek-1feaf",
  storageBucket: "pruebageek-1feaf.appspot.com",
  messagingSenderId: "1059751035706",
  appId: "1:1059751035706:web:9b31a2b3cf8596505b0603"
});

const db = firebase.firestore();
//const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db, 
  firebase,
};