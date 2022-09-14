
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD79KukF7x6Zz5qT-OyebahHNzJYWl6itI",
    authDomain: "clone-ff208.firebaseapp.com",
    projectId: "clone-ff208",
    storageBucket: "clone-ff208.appspot.com",
    messagingSenderId: "1086002583520",
    appId: "1:1086002583520:web:4f32992b3c05aee983bd85"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db =firebase.firestore();
  const auth = firebase.auth();
  
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};