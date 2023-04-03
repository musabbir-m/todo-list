// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqQnm6w5NtEvIHqL5XfKx4iP5qH8lA4os",
  authDomain: "mytask-65b5c.firebaseapp.com",
  projectId: "mytask-65b5c",
  storageBucket: "mytask-65b5c.appspot.com",
  messagingSenderId: "369452656264",
  appId: "1:369452656264:web:a6a7db74bef734f932213d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;