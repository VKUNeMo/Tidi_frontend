import React, {useEffect, useState} from "react";
import moment from "moment";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../../createInstance";
import {getBlogSuccess} from "../../../Redux/Slice/blogSlice";
import {addStorage, deleteBlog} from "../../../Redux/APIRequest/apiBlogRequest";
import {MdPlaylistAdd, MdStorage} from "react-icons/md";
import {CiShare1} from "react-icons/ci";
import {toast, ToastContainer} from "react-toastify";

function HeaderBlog(props) {
    const [key, setKey] = useState('');
    const url = useLocation();
    const author = props?.data?.idUser;
    const blog = props?.data;
    const user = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getBlogSuccess);
    const handleDelete = async () => {
        // eslint-disable-next-line no-restricted-globals
        const temp = confirm("Are you sure?");
        if (temp) {
            await deleteBlog(dispatch, navigate, accessToken, axiosJWT, blog._id);
        }
    }
    const handleStorage = () => {
        addStorage(dispatch, accessToken, blog._id, axiosJWT).then(rs => toast.success(rs.data, {autoClose: 1000})).catch(err => console.log(err));
    };
    return (
        <div
            className={"flex h-14 sticky top-0 bg-white justify-between items-center px-8 border-solid border-0 border-b-2 border-b-gray-200 z-10"}>
            <div className={"my-0.5"}>
                {props.type === "search" ?
                    (
                        <input type="text" placeholder={"Search..."} onChange={(e) => setKey(e.target.value)}
                               className={"py-1.5 pl-4 w-64 outline-0 rounded-xl"}/>
                    ) :
                    props.type === "blog-detail" ?
                        (
                            <div className={"flex flex-row items-center"}>
                                <Link to={`/profile/${author?._id}`} className={"flex"}>
                                    <img src={author?.avatar} alt="" className={"w-11 h-11 rounded-full border-solid"}/>
                                    <div className={"ml-4 mt-1 flex flex-col justify-between"}>
                                        <p className={"font-semibold"}>
                                            {author?.firstName} {author?.lastName}
                                            <span className={"ml-2 font-thin text-xs bg-gray-300 px-1"}>Author</span>
                                        </p>
                                        <p className={"text-xs text-gray-400"}>{moment(blog.createdAt).format("LL")}</p>
                                    </div>
                                </Link>
                                {user?._id === author?._id ? (
                                    props.theme === "edit-blog" ? (
                                        <div>
                                            <Link to={`../edit/${blog._id}`}
                                                  className={"ml-6 bg-green-500 py-1.5 px-3 rounded"}>Save</Link>
                                        </div>
                                    ) : (
                                        <div>
                                            <Link to={`../edit/${blog._id}`}
                                                  className={"ml-6 bg-blue-500 py-1.5 px-3 rounded"}>EDIT</Link>
                                            <Link to={""} className={"ml-3 bg-red-500 py-1.5 px-3 rounded"}
                                                  onClick={handleDelete}>DELETE</Link>
                                        </div>
                                    )
                                ) : ("")}
                            </div>
                        ) : (<></>)}
            </div>
            <div className={"flex flex-row h-full items-center justify-between"}>
                {props.type === "blog-detail" ? (
                    <div className={"text-lg mr-6 h-full flex justify-center items-center"}>
                        <Link className={"py-2 px-3"} title={"Share"}><CiShare1/></Link>
                        <Link onClick={handleStorage} className={"py-2 px-3"} title={"Storage"}><MdStorage/></Link>
                    </div>
                ):("")}
                <div className={"h-full border-solid border-0 border-l-gray-300 border-l-2 flex justify-center items-center pl-2"}>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-600">Light</span>

                    <label className="inline-flex relative items-center cursor-pointer absolute top-0 ml-6">
                        {/*<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">Light</span>*/}
                        <input type="checkbox" value={""} className="sr-only peer outline-0"/>
                        <div
                            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white-300 dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:bg-black peer-checked:bg-white"/>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">Night</span>
                    </label>
                    {/*Night/Light mode*/}
                </div>
            </div>
        </div>
    )
}

export default HeaderBlog;
