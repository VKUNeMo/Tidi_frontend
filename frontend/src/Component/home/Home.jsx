import React from "react";
import {logoutUser} from "../../Redux/APIRequest/apiAuthRequest";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
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
            <div className=' bg-neutral-50 bg-opacity-60 w-full h-screen flex justify-center items-center' >
                trang home sau khi da login <br/>
                <button onClick={handleLogOut}>Log out</button>
            </div>
        </>
    );
}

export default Home;
