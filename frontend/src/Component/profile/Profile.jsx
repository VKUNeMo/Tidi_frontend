import React from "react";
import {Routes, Route} from "react-router-dom"
import NavProfile from "./nav/Nav.profile";
import ViewProfile from "./viewProfile/ViewProfile";

const Profile = () => {
    return (
        <div className={"ml-72"}>
            <NavProfile/>
            <div>
                <Routes>
                    <Route path={"/*"}>
                        <Route path={"me/*"} element={<ViewProfile/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
};

export default Profile;
