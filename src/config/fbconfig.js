import firebase from 'firebase/app';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDdEbkwgXRCVPElW2Ewz4TejDDbF1MEfZg",
    authDomain: "hemnote-fa958.firebaseapp.com",
    databaseURL: "https://hemnote-fa958-default-rtdb.firebaseio.com",
    projectId: "hemnote-fa958",
    storageBucket: "hemnote-fa958.appspot.com",
    messagingSenderId: "303636274931",
    appId: "1:303636274931:web:5991309f69604f7ffa6186"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase