import React from "react";
import NavBlog from "./nav/Nav.blog";
import {Routes, Route} from "react-router-dom";
import BlogCreate from "./BlogCreate";
import ViewMyBlog from "./ViewMyBlog";
import ViewPublic from "./ViewPublic";
import Detail from "./Detail";

function Blog() {
    return (
        <div className={"ml-12 flex"}>
            <div className={"sticky top-0"}>
                <NavBlog/>
            </div>
            <div className={"w-full border-solid border-0 border-l-2 border-l-gray-200"}>
                <Routes>
                    <Route path={"/*"}>
                        <Route path={"article"} element={<ViewPublic/>}/>
                        <Route path={"new"} element={<BlogCreate/>}/>
                        <Route path={"my-blog"} element={<ViewMyBlog/>}/>
                        <Route path={"view/:idBlog"} element={<Detail/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default Blog;
