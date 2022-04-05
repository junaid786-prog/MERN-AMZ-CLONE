// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBq3CGsjX2L_jxBCgHfsI2iWrv4ZugiV_o",
  //AIzaSyBq3CGsjX2L_jxBCgHfsI2iWrv4ZugiV_o
  authDomain: "amz-clone-app.firebaseapp.com",
  projectId: "amz-clone-app",
  storageBucket: "amz-clone-app.appspot.com",
  messagingSenderId: "630881952451",
  appId: "1:630881952451:web:547898c530b8e0f83fb876",
  measurementId: "G-RFBDS3RNN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;