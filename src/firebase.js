import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgGEL6UIaYHljkvth_XqSNhu9xCySPI5M",
  authDomain: "messaging-prototype-e5840.firebaseapp.com",
  projectId: "messaging-prototype-e5840",
  storageBucket: "messaging-prototype-e5840.appspot.com",
  messagingSenderId: "632414514051",
  appId: "1:632414514051:web:8255a05b50dacd00d8e4b6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }
