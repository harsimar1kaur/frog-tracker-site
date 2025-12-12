import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAI32CW3zbd3vfu_p5IlyVOwWYy3kjTfhE",
  authDomain: "frogtracker-7adb6.firebaseapp.com",
  projectId: "frogtracker-7adb6",
  storageBucket: "frogtracker-7adb6.firebasestorage.app",
  messagingSenderId: "530501594935",
  appId: "1:530501594935:web:8e97d671e5a845a82674b2",
  measurementId: "G-5J7KEM69R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function signInWithGooglePopup() {
  return signInWithPopup(auth, provider);
}

export function signOutUser() {
  return signOut(auth);
}

export { onAuthStateChanged };