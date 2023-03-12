import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxuQJVfcbt5_iffMEc5UY0GVpLKkyGn6A",
  authDomain: "nintenshop-84700.firebaseapp.com",
  projectId: "nintenshop-84700",
  storageBucket: "nintenshop-84700.appspot.com",
  messagingSenderId: "575865785408",
  appId: "1:575865785408:web:008f58ee6990759091e3a5",
  measurementId: "G-2YV76CLYMP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);