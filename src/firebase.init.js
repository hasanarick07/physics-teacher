// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8W-ZKVas0Y60DfiBMkSwzUz_q2Wa2soU",
  authDomain: "physics-teacher-e7cf0.firebaseapp.com",
  projectId: "physics-teacher-e7cf0",
  storageBucket: "physics-teacher-e7cf0.appspot.com",
  messagingSenderId: "247614374757",
  appId: "1:247614374757:web:02f747e8e037a29c41178c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
