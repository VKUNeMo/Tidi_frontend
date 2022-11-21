import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/login/Login"
import Register from "./Component/register/Register";
import Home from "./Component/home/Home";
import './App.css';
import Profile from "./Component/profile/Profile";
import Nav from "./Component/Nav/Nav"
import { useSelector } from "react-redux";


function App() {
  const isLogin = useSelector(state => state.auth.login.success);

  return (
    <Router>
      {isLogin && <Nav />}
      <div id='main-component'
        className='bg-neutral-400 bg-opacity-60 w-full h-screen flex justify-center items-center'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;
