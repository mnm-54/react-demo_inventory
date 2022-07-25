// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmPdCInYTFX1zKLNjc2SEQlBVBdrbZrPI",
  authDomain: "uploading-file-using-react.firebaseapp.com",
  projectId: "uploading-file-using-react",
  storageBucket: "uploading-file-using-react.appspot.com",
  messagingSenderId: "407651425236",
  appId: "1:407651425236:web:7e3d3a58f9d65eb7469441",
  measurementId: "G-6W6LH1HS84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const DB = getFirestore(app);
