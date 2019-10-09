import * as firebase from "firebase";
// import firestore from 'firebase/firestore'
const settings = { timestampsInSnapshots: true };
const config = {
  apiKey: "AIzaSyAMeCCFhYbZ47QYMUZAeTR-D7aKvvBqL44",
  authDomain: "burgerqueen-pandmonium.firebaseapp.com",
  databaseURL: "https://burgerqueen-pandmonium.firebaseio.com",
  projectId: "burgerqueen-pandmonium",
  storageBucket: "burgerqueen-pandmonium.appspot.com",
  messagingSenderId: "46946006669",
  appId: "1:46946006669:web:dd61f494242ed57c4c14c4"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export default firebase;
