const firebase = require('firebase');
const firebaseAdmin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

const admin = firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://khohuai-v2-default-rtdb.firebaseio.com",
  storageBucket: "gs://khohuai-v2.appspot.com"
});

const firebaseConfig = {
  apiKey: "AIzaSyDFVW8oB9jThgn0V_dBOlwlSw7xXOIGEMk",
  authDomain: "khohuai-v2.firebaseapp.com",
  databaseURL: "https://khohuai-v2-default-rtdb.firebaseio.com",
  projectId: "khohuai-v2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//firestore
const firestore = firebaseApp.firestore();

//email&password login
const auth = firebaseApp.auth();

//google login 
const googleProvider = new firebase.auth.GoogleAuthProvider();

//facebook login
const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.addScope('user_birthday');

// //firebase storage
const storage = admin.storage();
const bucket = storage.bucket();

module.exports = {
    firebaseApp,
    firestore,
    auth,
    googleProvider,
    facebookProvider,
    admin,
    storage,
    bucket
}