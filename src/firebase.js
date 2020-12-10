import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOe_VdEiOd0kscQMiaHlhuW2xZwcx3Kkg",
  authDomain: "whatsapp-clone-4f5e8.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-4f5e8.firebaseio.com",
  projectId: "whatsapp-clone-4f5e8",
  storageBucket: "whatsapp-clone-4f5e8.appspot.com",
  messagingSenderId: "487352193725",
  appId: "1:487352193725:web:a8abcaf1f375f2b6cd5dd4",
  measurementId: "G-5KS7YQKBY6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
