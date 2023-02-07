
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvWnkUOQXo6biPjOHESd4Zs1ulVwZ5UCM",
  authDomain: "my-product-95c67.firebaseapp.com",
  projectId: "my-product-95c67",
  storageBucket: "my-product-95c67.appspot.com",
  messagingSenderId: "263652749999",
  appId: "1:263652749999:web:151430be6bf3438ca95a5a",
  measurementId: "G-S6YV2333GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage,app}