import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBca_9LmGSL4iKMCEMzpKvhU_ibVu42iPY",
    authDomain: "music-playlist-d140f.firebaseapp.com",
    projectId: "music-playlist-d140f",
    storageBucket: "music-playlist-d140f.firebasestorage.app",
    messagingSenderId: "1082077817066",
    appId: "1:1082077817066:web:1f37d05f62043e253f4f93"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }