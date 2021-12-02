import firebase from "firebase/app";
import "firebase/auth";

import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxkW2uLSsAvtS9ZBB1blBihtNkfDe1XPc",
  authDomain: "sice-760f8.firebaseapp.com",
  databaseURL: "https://sice-760f8-default-rtdb.firebaseio.com",
  projectId: "sice-760f8",
  storageBucket: "sice-760f8.appspot.com",
  messagingSenderId: "1056109842956",
  appId: "1:1056109842956:web:957055925aa0c68be0d429",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebaseApp.auth();
export default firebaseApp;
