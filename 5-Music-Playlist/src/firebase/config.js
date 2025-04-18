import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBca_9LmGSL4iKMCEMzpKvhU_ibVu42iPY",
    authDomain: "music-playlist-d140f.firebaseapp.com",
    projectId: "music-playlist-d140f",
    storageBucket: "music-playlist-d140f.firebasestorage.app",
    messagingSenderId: "1082077817066",
    appId: "1:1082077817066:web:1f37d05f62043e253f4f93"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Services
const projectAuth = getAuth(app)
const projectFirestore = getFirestore(app)
const timestamp = serverTimestamp


export { projectFirestore, projectAuth, timestamp }