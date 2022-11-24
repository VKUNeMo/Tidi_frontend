import React from "react";
import {Link} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import {BsPencilSquare} from "react-icons/bs";
import {MdArticle, MdFavoriteBorder, MdStorage} from "react-icons/md";

function NavProfile() {
    return (
        <nav className="h-screen flex fixed flex-col border-solid border-0 border-r-2 border-r-gray-200 z-50 top-0 left-12 w-60">
            <div className={"w-full text-center border-solid border-0 border-b-2 border-gray-200 py-3 px-2"}>
                <h1 className={""}>Profile</h1>
            </div>
            <div className={"flex flex-col ml-8 mt-4"}>
                <Link to={"article"} className={"text-gray-500 my-3"}><MdArticle/> New Articles</Link>
                <Link to={"my-blog"} className={"text-gray-500 my-3"}><AiOutlineUser/> My Blog</Link>
                <Link to={"new"} className={"text-gray-500 my-3"}><BsPencilSquare/>  New</Link>
                <Link to={"favourite"} className={"text-gray-500 my-3"}><MdFavoriteBorder/> Favourite</Link>
                <Link to={"storage"} className={"text-gray-500 my-3"}><MdStorage/> Storage</Link>
            </div>
        </nav>
    )
}

export default NavProfile;
