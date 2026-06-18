import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDs3xUNhwnX9xDJ_IZiRwJCyxWllPz6Y2M",
  authDomain: "vsw-digital.firebaseapp.com",
  projectId: "vsw-digital",
  storageBucket: "vsw-digital.firebasestorage.app",
  messagingSenderId: "710263488011",
  appId: "1:710263488011:web:5a5bc1a7b08f0c28a4910e",
  measurementId: "G-23TF7N02LQ"
};

const app = initializeApp(firebaseConfig);

// Initialize standard Firestore database
export const db = getFirestore(app);
