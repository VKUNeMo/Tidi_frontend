import React from "react";
import {logoutUser} from "../../Redux/APIRequest/apiAuthRequest";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Nav from "../Nav/Nav";
// import {
//     useNavigate,
// } from "react-router-dom";
// import axios from 'axios'


function Home() {
    const dataUser = useSelector(state => state.auth.login.currentUser?.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function handleLogOut() { 
        logoutUser(dispatch, navigate, dataUser.token.accessToken);
    }
    return (
        <>
            <div className=' bg-gray-900 text-white bg-opacity-60 w-full h-screen relative' >
                <Nav>

                </Nav>
                <button onClick={handleLogOut} className="absolute top-0 right-0">Log out</button>
            </div>
        </>
    );
}

export default Home;
