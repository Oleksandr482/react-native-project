import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDErm0PKF9xY0WPz2qTAh_cc8dXHzrOo04",
  authDomain: "react-native-project-671a2.firebaseapp.com",
  databaseURL: "https://react-native-project-671a2-default-rtdb.firebaseio.com",
  projectId: "react-native-project-671a2",
  storageBucket: "react-native-project-671a2.appspot.com",
  messagingSenderId: "895603434663",
  appId: "1:895603434663:web:3e2596bb614ee88b2d6782",
  measurementId: "G-EQF2TQ2DTG",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
