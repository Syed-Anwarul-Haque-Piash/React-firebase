import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBL6THIhEvd0JVWlahnjorymUc-dkd-K44",
  authDomain: "fir-4b1e6.firebaseapp.com",
  projectId: "fir-4b1e6",
  storageBucket: "fir-4b1e6.appspot.com",
  messagingSenderId: "200911753668",
  appId: "1:200911753668:web:b1c2b86b529e38f90e1491"
};


const firebaseApp =()=>{
  initializeApp(firebaseConfig);
} 

export default firebaseApp;