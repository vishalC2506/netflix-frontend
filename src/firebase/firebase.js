import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAhY2o4pXV4xQwvSgoaJs2wXBoIMtggwTo",
  authDomain: "net-clone-5a491.firebaseapp.com",
  projectId: "net-clone-5a491",
  storageBucket: "net-clone-5a491.appspot.com",
  messagingSenderId: "494500740913",
  appId: "1:494500740913:web:76c10a296633b99653ba10",
  measurementId: "G-MGGZWKW9FB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
