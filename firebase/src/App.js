import './App.css';
import {getAuth,signInWithPopup,GoogleAuthProvider, signOut } from 'firebase/auth';
import  FirebaseApp from './firebase.config';
import React, { useState } from "react"

FirebaseApp()

function App() {

  const auth=getAuth();
  const provider=new GoogleAuthProvider()
  const[user,setUser]=useState({
    isSigned:false,
    name:'',
    email:'',
    photo:''
  })

  const signInBtn=()=>{
    signInWithPopup(auth,provider)
    .then(res=>{
      const {displayName,email,photoURL}=res.user;
      const signedInUser={
        isSigned:true,
        name:displayName,
        email:email,
        photo:photoURL
      }
      setUser(signedInUser)
      console.log(res.user)
    })
    .catch(err=>{
      console.log(err)
      console.log(err.message);
    })
  }
  const signOutBtn=()=>{
    console.log("SignOut clicked")
    signOut(auth,provider)
    .then(res=>{
     const signedOutUser={
       isSigned:false,
       name:'',
       email:'',
       photo:''
     }
     setUser(signedOutUser)

    })
    .catch(err=>{
      console.log(err);
      console.log(err.message)
    })
  }

  
  return (
    <div className="App">
      {
        user.isSigned ?<button onClick={signOutBtn}>Sign Out</button>:
        <button onClick={signInBtn}>Sign In</button>

      }
      
      
      {
        user.isSigned &&<div>
          <h4>Welcome: {user.name}</h4>
          <h3>User Email: {user.email}</h3>
          <img src={user.photo} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
