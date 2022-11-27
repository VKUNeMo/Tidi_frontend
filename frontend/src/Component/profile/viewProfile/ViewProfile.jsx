import React, {useState, useEffect} from "react";
import HeaderBlog from "../../blog/header/Header.blog";
import {Routes, Route} from "react-router-dom";
import {FaPlus} from "react-icons/fa";
import {Link} from "react-router-dom";
import ViewMyBlog from "../../blog/ViewMyBlog";
import {useDispatch, useSelector} from "react-redux";
import BlogProfile from "../blog/BlogProfile";
import {createAxios} from "../../../createInstance";
import {getBlogSuccess} from "../../../Redux/Slice/blogSlice";
import {getAllOwnerBlog} from "../../../Redux/APIRequest/apiBlogRequest";

const ViewProfile = () => {
    const user = useSelector(state => state.auth.login.currentUser);
    const fullnameUser = user.firstName + " " + user.lastName;
    const [blog, setBlog] = useState([]);
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    useEffect(()=>{
        const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getBlogSuccess);
        getAllOwnerBlog(accessToken, dispatch, axiosJWT).then(data => setBlog(data.data.blogs));
    }, [accessToken, dispatch, refreshToken, user]);
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
                                        <h3 className={"mb-2"}>{fullnameUser}</h3>
                                        <span className={"text-gray-400"}>{user.email}</span>
                                    </div>
                                    <div className={"mr-4"}>
                                        <Link to={""}
                                            className={"border-solid py-1 px-2 flex justify-center border-blue-400 text-blue-400 item-center rounded cursor-pointer"}>
                                            <FaPlus/>
                                            <span className={"ml-2"}>Edit Info</span>
                                        </Link>
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

                    <Link to={"/profile/me/blog"} className={"mx-4"}>
                        Blog
                    </Link>
                    <Link to={"/profile/me/blog"} className={"mx-4"}>Project</Link>
                    <Link to={""} className={"mx-4"}>Project</Link>
                    <Link to={""} className={"mx-4"}>Project</Link>
                    <Link to={""} className={"mx-4"}>Project</Link>

                </div>
                <hr/>
                <Routes>
                    <Route path={"/*"}>
                        <Route path={"blog"} element={<BlogProfile user={user} blog={blog}/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default ViewProfile;
