import React from "react";
import DetailProject from "./Content/DetailProject";
import NavProject from "./Nav/NavProject";
import { Route,Routes } from "react-router-dom";

function Project()
{

    return (
        <>
            <NavProject ></NavProject>
            <Routes>
                <Route path={"/*"}>
                    <Route path={"project/:id"} element={<DetailProject/>} />
                    {/*<Route path={"member"} element={}/>*/}
                </Route>
            </Routes>
        </>


    )
}
export default Project;
