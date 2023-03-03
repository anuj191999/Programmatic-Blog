// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYs_0GWnh44PqlwDud-RSgtHKHWGilzAs",
  authDomain: "blogproject-b124d.firebaseapp.com",
  projectId: "blogproject-b124d",
  storageBucket: "blogproject-b124d.appspot.com",
  messagingSenderId: "261746672457",
  appId: "1:261746672457:web:de2388e07a181d55561098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();