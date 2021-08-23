import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

const firebaseConfig = {
  apiKey: "AIzaSyBn4CA3RjvnGtb2LnzqpS-xQFOWyO-Zx2k",
  authDomain: "comic-cannel-chat.firebaseapp.com",
  databaseURL: "https://comic-cannel-chat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comic-cannel-chat",
  storageBucket: "comic-cannel-chat.appspot.com",
  messagingSenderId: "853471119353",
  appId: "1:853471119353:web:61ccd291e2480b04d4df28"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.database();
