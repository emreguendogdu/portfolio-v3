import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "portfolio-projects-c92c4.firebaseapp.com",
  projectId: "portfolio-projects-c92c4",
  storageBucket: "portfolio-projects-c92c4.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
