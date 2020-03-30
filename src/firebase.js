import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyC6yJ82di3dCOEF3CgBwMBC49l8GqMGxWg",
    authDomain: "axios-e0ddd.firebaseapp.com",
    databaseURL: "https://axios-e0ddd.firebaseio.com",
    projectId: "axios-e0ddd",
    storageBucket: "axios-e0ddd.appspot.com",
    messagingSenderId: "1033336713304",
    appId: "1:1033336713304:web:f1db7e3a5702017b941a2d",
    measurementId: "G-4ESW977DPQ"

  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;