import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import {auth} from './firebase-config';

function App() {

  const [isAuth,setIsAuth]=useState(localStorage.getItem("isAuth"));


  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname="/login";
    });
  };

  return (
     <Router>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/Createpost">Create post</Link>
        {!isAuth ?(
          <Link to="/login">login</Link>
        ):(
          <>
          <Link to="/CreatePost"> Create Post</Link>
          <button onClick={signUserOut}> Log Out </button>
          </>
        )}
       </nav>
       <Routes>
         <Route path="/" element={<Home isAuth={isAuth}/>}></Route>
         <Route path="/CreatePost" element={<CreatePost isAuth={isAuth}/>}></Route>
         <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>}></Route>
       </Routes>
     </Router>
  );
}

export default App;
