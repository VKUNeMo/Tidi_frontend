import React, {useEffect, useState} from "react";
import HeaderBlog from "../../blog/header/Header.blog";
import {Routes, Route, useParams} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import {Link} from "react-router-dom";
import ViewMyBlog from "../../blog/ViewMyBlog";
import {getInfo} from "../../../Redux/APIRequest/apiAuthRequest";
import BlogProfile from "../blog/BlogProfile";

const ViewOther = () => {
    const {idUser} = useParams();
    const [user, setUser] = useState([]);
    const [project, setProject] = useState([]);
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        getInfo(idUser).then(data => {
            setUser(data.data.user);
            setBlog(data.data.blog);
        });
    }, [idUser]);
    return (
        <div>
            <HeaderBlog/>
            <div className={"flex flex-col item-center justify-center mt-4 mx-6"}>
                <div className={"flex justify-center mb-8"}>
                    <div className={"flex justify-center w-full"}>
                        <div className={"relative pb-24 w-full"}>
                            <img className={"w-[100%] min-h-[200px] max-h-[240px] rounded-t"}
                                 src="https://khoinguonsangtao.vn/wp-content/uploads/2021/09/anh-bia-facebook-cute-nhat-780x289.jpg"
                                 alt=""/>
                            <div className={"absolute h-fit bottom-[6%] flex flex-row w-full"}>
                                <img className={"w-[12vw] h-[12vw] rounded-full border-4 border-white border-solid ml-12"}
                                     src={user.avatar} alt=""/>
                                <div className={"flex flex-row h-full item-center justify-between w-full mt-28 ml-4"}>
                                    <div className={""}>
                                        <h3 className={"mb-2"}>{user.firstName + " " + user.lastName}</h3>
                                        <span className={"text-gray-400"}>{user.email}</span>
                                    </div>
                                    <div className={"mr-4"}>
                                        <span
                                            className={"border-solid py-1 px-2 flex justify-center border-blue-400 text-blue-400 item-center rounded cursor-pointer"}>
                                            <FaPlus/>
                                            <span className={"ml-2"}>Follow</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <hr/>
                <div className={"flex flex-row my-2"}>
                    <Link to={`/profile/${user._id}/blog`} className={"mx-4"}>
                        Blog
                    </Link>
                    <Link to={``} className={"mx-4"}>Project</Link>
                    <Link to={""} className={"mx-4"}>Project</Link>
                    <Link to={""} className={"mx-4"}>Project</Link>
                    <Link to={""} className={"mx-4"}>Project</Link>
                </div>
                <hr/>
                <Routes>
                    <Route path={"/*"}>
                        <Route path={"blog"} element={<BlogProfile blog={blog} user={user}/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default ViewOther;
