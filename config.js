import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCYyqItM8ep3QFy2u0sdO3xa03REuwTIUQ",
    authDomain: "team-voting-b5bfe.firebaseapp.com",
    databaseURL: "https://team-voting-b5bfe-default-rtdb.firebaseio.com",
    projectId: "team-voting-b5bfe",
    storageBucket: "team-voting-b5bfe.appspot.com",
    messagingSenderId: "578123667195",
    appId: "1:578123667195:web:b67213624e55016370825e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();