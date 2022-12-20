import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/login/Login"
import Register from "./Component/register/Register";
import Home from "./Component/home/Home";
import './App.css';
import Nav from "./Component/Nav/Nav"
import { useSelector } from "react-redux";
import DetailProject from "./Component/project/Content/DetailProject";

function App() {
  const isLogin = useSelector(state => state.auth.login.success);

  return (
    <Router>
      {isLogin && <Nav />}
      <div id='main-component'
        className='bg-neutral-50 bg-opacity-60 h-screen flex flex-row justify-center items-center'>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/*" element={<Home />} >
            <Route path="project/:name" element={<DetailProject />} />
          </Route>
            {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </Router>
  );

}

export default App;