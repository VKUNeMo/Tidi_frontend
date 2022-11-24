import React from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Login from "./Component/login/Login"
import Register from "./Component/register/Register";
import Home from "./Component/home/Home";
import './App.css';
import Profile from "./Component/profile/Profile";
import Nav from "./Component/Nav/Nav";
import BlogCreate from "./Component/blog/BlogCreate";
import {useSelector} from "react-redux";
import Blog from "./Component/blog/Blog";
import ViewMyBlog from "./Component/blog/ViewMyBlog";
import ViewPublic from "./Component/blog/ViewPublic";
import EditBlog from "./Component/blog/EditBlog";


function App() {
    const isLogin = useSelector(state => state.auth.login.success);
    const ProtectedRoute = ({ user, children }) => {
        if (!user) {
            return <Navigate to="/login" replace />;
        }
        return children;
    };
    return (
        <Router>
            <div id='main-component' className='w-screen h-screen grid'>
                {isLogin && <Nav/>}
                <div>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={
                            <ProtectedRoute user={isLogin}><Profile/></ProtectedRoute>
                        }/>
                        <Route path="blog/*" element={
                            <ProtectedRoute user={isLogin}><Blog/></ProtectedRoute>
                        }>
                            <Route path="article" element={<ViewPublic/>}/>
                            <Route path="new" element={<BlogCreate/>}/>
                            <Route path="my-blog" element={<ViewMyBlog/>}/>
                            <Route path="edit" element={<EditBlog/>}/>
                        </Route>
                    </Routes>
                </div>
            </div>
        </Router>
    );

}

export default App;
