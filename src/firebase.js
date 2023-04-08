// for several error is copied api and others paste on this code copied from stackoverflow

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPEvJFOYlHFK6XZ5F_QcJlK0lio_d_y48",
  authDomain: "first-fdf28.firebaseapp.com",
  projectId: "first-fdf28",
  storageBucket: "first-fdf28.appspot.com",
  messagingSenderId: "476882239244",
  appId: "1:476882239244:web:845935d3afb60980889329",
  measurementId: "G-TR9QEPXM3W"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };