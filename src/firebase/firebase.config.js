// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcyFeF92hovfSYDMiL8K7_anvyUfjrXNo",
  authDomain: "doctors-portal-f61d3.firebaseapp.com",
  projectId: "doctors-portal-f61d3",
  storageBucket: "doctors-portal-f61d3.appspot.com",
  messagingSenderId: "199839354542",
  appId: "1:199839354542:web:e501e864197f537bcbe73f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;