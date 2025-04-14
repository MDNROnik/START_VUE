import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBe4sFoxQEXB4A0ZH0c_WT_7T901SZ3d_w",
  authDomain: "live-chat-room-b6375.firebaseapp.com",
  projectId: "live-chat-room-b6375",
  storageBucket: "live-chat-room-b6375.firebasestorage.app",
  messagingSenderId: "1000845412986",
  appId: "1:1000845412986:web:eee2002aad0ba9b14509c3",
  measurementId: "G-0ZHFN2MWFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Services
const auth = getAuth(app)
const db = getFirestore(app)
const timestamp = serverTimestamp

// Export them
export { auth, db, timestamp }
