import React from "react";
import NavBlog from "./Nav.blog";
import {Routes, Route} from "react-router-dom";
import BlogCreate from "./BlogCreate";
import View from "./View";

function Blog() {
    return (
        <div className={"ml-72"}>
            <NavBlog/>
            <div>
                <Routes>
                    <Route path={"/*"}>
                        <Route path={"article"}/>
                        <Route path={"new"} element={<BlogCreate/>}/>
                        <Route path={"all"} element={<View/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Blog;
