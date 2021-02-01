// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDauP4ADM54JISKvOVet1R_FxApM1olcn8",
  authDomain: "challenge-b6a9f.firebaseapp.com",
  projectId: "challenge-b6a9f",
  storageBucket: "challenge-b6a9f.appspot.com",
  messagingSenderId: "899758346359",
  appId: "1:899758346359:web:95b27b8650fdd7a2dcf672",
  measurementId: "G-G7MVBC5570"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};

