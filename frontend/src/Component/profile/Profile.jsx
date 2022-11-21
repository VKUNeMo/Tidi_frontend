import {useSelector} from "react-redux";
import {useState} from "react";
import Nav from "./nav/Nav";

const Profile = () => {


    return (
        <>
            <div className="flex">
                <Nav/>
                <div>Profile</div>
            </div>
        </>
    )
};

export default Profile;
