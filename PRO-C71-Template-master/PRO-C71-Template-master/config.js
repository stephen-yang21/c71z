import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCw3vvVwLXFdeMl_Cge8-6NJHQ33OqVLbQ",
    authDomain: "c71z-38629.firebaseapp.com",
    databaseURL: "https://c71z-38629-default-rtdb.firebaseio.com",
    projectId: "c71z-38629",
    storageBucket: "c71z-38629.appspot.com",
    messagingSenderId: "509951044279",
    appId: "1:509951044279:web:c94cdf39e3c8a90430fb32",
    measurementId: "G-S97CQVRHS3"
  };
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
