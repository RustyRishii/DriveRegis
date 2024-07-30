// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSP2l_JT15WjT09cGZbtZjJaAx6qO6GdU",
  authDomain: "regisdrive-fbc1f.firebaseapp.com",
  projectId: "regisdrive-fbc1f",
  storageBucket: "regisdrive-fbc1f.appspot.com",
  messagingSenderId: "447807045267",
  appId: "1:447807045267:web:f344b4d8ee3acba88ad766",
  measurementId: "G-63TRY5CZZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;