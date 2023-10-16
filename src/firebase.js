import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyApqM5hH4R4-ajTdnKbclWApCoVtRYCo0E",
  authDomain: "react-hooks-blog-48957.firebaseapp.com",
  projectId: "react-hooks-blog-48957",
  storageBucket: "react-hooks-blog-48957.appspot.com",
  messagingSenderId: "422803453374",
  appId: "1:422803453374:web:df7386e37d4c990bd175ef"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

export const firestore=firebase.firestore();