import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBP6vDjILbr1pf4LsffXBHBfV4WnC3T52k",
  authDomain: "wqeqweqe-51ba0.firebaseapp.com",
  databaseURL: "https://wqeqweqe-51ba0-default-rtdb.firebaseio.com",
  projectId: "wqeqweqe-51ba0",
  storageBucket: "wqeqweqe-51ba0.appspot.com",
  messagingSenderId: "91777281583",
  appId: "1:91777281583:web:6010561471052a7c2ae0da",
  measurementId: "G-KVDG0LHMC0",
  // apiKey: "AIzaSyDErm0PKF9xY0WPz2qTAh_cc8dXHzrOo04",
  // authDomain: "react-native-project-671a2.firebaseapp.com",
  // // databaseURL: "https://react-native-project-671a2-default-rtdb.firebaseio.com",
  // projectId: "react-native-project-671a2",
  // storageBucket: "react-native-project-671a2.appspot.com",
  // messagingSenderId: "895603434663",
  // appId: "1:895603434663:web:3e2596bb614ee88b2d6782",
  // measurementId: "G-EQF2TQ2DTG",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
