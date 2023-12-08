import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVjGp5F8A1WX9YokYFxC9Uq31wj0voJH0",
  authDomain: "disneyplus-clone-68ef7.firebaseapp.com",
  projectId: "disneyplus-clone-68ef7",
  storageBucket: "disneyplus-clone-68ef7.appspot.com",
  messagingSenderId: "818046750746",
  appId: "1:818046750746:web:098fe2fc6e3684032841a3",
  measurementId: "G-GS4WNHKTWT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db ;