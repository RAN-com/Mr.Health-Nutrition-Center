import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBCOMOvzZkeLwlZzdNXSwroNEPrhXw2cXM",
    authDomain: "mr-health-nutrition-center.firebaseapp.com",
    projectId: "mr-health-nutrition-center",
    storageBucket: "mr-health-nutrition-center.appspot.com",
    messagingSenderId: "318169230821",
    appId: "1:318169230821:web:4efab8e3cbe690d2b3930c",
    measurementId: "G-618MHV9K04"
  };

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)