import firebase from 'firebase/app';
import 'firebase/database';

  // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCgo__XjZygSR0XWEphiMiwPuOjNxefH0Y",
    authDomain: "museumfinder-3d651.firebaseapp.com",
    databaseURL: "https://museumfinder-3d651.firebaseio.com",
    projectId: "museumfinder-3d651",
    storageBucket: "museumfinder-3d651.appspot.com",
    messagingSenderId: "609226698076",
    appId: "1:609226698076:web:a6cfa6c2f5a9d2c04ba599"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
