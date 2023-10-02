// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiM9oCmKqJRc8Z5nsiVQya_rFAixfMxdk",
  authDomain: "explore-firebase-ee52f.firebaseapp.com",
  projectId: "explore-firebase-ee52f",
  storageBucket: "explore-firebase-ee52f.appspot.com",
  messagingSenderId: "606262122439",
  appId: "1:606262122439:web:e1f9b00e01ae0bc9f3ebe2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const Auth = getAuth(app)
 export default Auth