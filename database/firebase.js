import * as firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyDceb3HgkloqF-q4PrxwH2IOwLnNCCIP-I",
    authDomain: "hospital-e394d.firebaseapp.com",
    databaseURL: "https://hospital-e394d.firebaseio.com",
    projectId: "hospital-e394d",
    storageBucket: "hospital-e394d.appspot.com",
    messagingSenderId: "605662291692",
    appId: "1:605662291692:web:229f22dd31078d218e67c9",
    measurementId: "G-M7NF81475B"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;