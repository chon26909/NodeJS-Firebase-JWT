const firebase = require('firebase');
const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://khohuai-v2-default-rtdb.firebaseio.com"
});


const firebaseConfig = {
  apiKey: "AIzaSyDFVW8oB9jThgn0V_dBOlwlSw7xXOIGEMk",
  authDomain: "khohuai-v2.firebaseapp.com",
  databaseURL: "https://khohuai-v2-default-rtdb.firebaseio.com",
  projectId: "khohuai-v2",
  storageBucket: "khohuai-v2.appspot.com",
  messagingSenderId: "644654390402",
  appId: "1:644654390402:web:7d6bb217c4a6daff64e89b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firestore
const firestore = firebase.firestore();

module.exports = {
  admin,
  firebase,
  firestore
};