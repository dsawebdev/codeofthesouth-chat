// Initialize Firebase
import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  apiKey: "AIzaSyBWc_-TDOf3IFsKnap-05zeYk7HmPYDe1g",
  authDomain: "codeofthesouth-chat.firebaseapp.com",
  databaseURL: "https://codeofthesouth-chat.firebaseio.com",
  projectId: "codeofthesouth-chat",
  storageBucket: "codeofthesouth-chat.appspot.com",
  messagingSenderId: "1070612928223"
};
firebase.initializeApp(config);

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore();