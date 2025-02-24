import { type FirebaseOptions, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.BUN_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.BUN_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.BUN_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.BUN_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.BUN_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.BUN_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
