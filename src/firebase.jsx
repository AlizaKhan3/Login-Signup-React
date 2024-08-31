import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBvIRfN8fF1nS9o11HxoKyDm50lYj6bjzU",
  authDomain: "react-crud-web-app.firebaseapp.com",
  projectId: "react-crud-web-app",
  storageBucket: "react-crud-web-app.appspot.com",
  messagingSenderId: "46721307677",
  appId: "1:46721307677:web:e6c852644d4fbfbff7e2f4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth }