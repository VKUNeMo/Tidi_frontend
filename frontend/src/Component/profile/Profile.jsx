import React from "react";
import {Routes, Route} from "react-router-dom"
import NavProfile from "./nav/Nav.profile";
import ViewProfile from "./viewProfile/ViewProfile";
import ViewOther from "./viewProfile/ViewOther";
import DetailProfile from "./detailAndEdit/DetailProfile";
import Password from "./detailAndEdit/Password";

const Profile = () => {
    return (
        <div className={"ml-72"}>
            <NavProfile/>
            <div>
                <Routes>
                    <Route path={"/*"}>
                        <Route path={"detail"} element={<DetailProfile/>}/>
                        <Route path={"password"} element={<Password/>}/>
                        <Route path={"follow"} element={""}/>
                        <Route path={"me/*"} element={<ViewProfile/>}/>
                        <Route path={":idUser/*"} element={<ViewOther/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
};

export default Profile;
