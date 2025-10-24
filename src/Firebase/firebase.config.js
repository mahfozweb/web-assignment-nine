// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3pHDnOhP-wYmWJLD_zVxJT4GqXwx68ao",
  authDomain: "web-assignment-nine.firebaseapp.com",
  projectId: "web-assignment-nine",
  storageBucket: "web-assignment-nine.firebasestorage.app",
  messagingSenderId: "1026348092387",
  appId: "1:1026348092387:web:afb152761380d1f308aed6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
