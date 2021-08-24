import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDER_6imjG2TW0Le5Q9hSve19runmjhOEQ",
    authDomain: "firestore-boum93.firebaseapp.com",
    projectId: "firestore-boum93",
    storageBucket: "firestore-boum93.appspot.com",
    messagingSenderId: "44356368201",
    appId: "1:44356368201:web:94864615a542204d048c98"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.firestore();

export default database;
