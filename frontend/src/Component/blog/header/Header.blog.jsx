import React from "react";
import moment from "moment";
import {Link} from "react-router-dom";

function HeaderBlog(props){
    const author = props?.data?.idUser;
    const blog = props?.data;
    return (
        <div
            className={"flex h-14 sticky top-0 bg-white justify-between items-center px-8 border-solid border-0 border-b-2 border-b-gray-200 z-10"}>
            <div className={"my-0.5"}>
                {props.type === "search" ? (
                    <input type="text" placeholder={"Search..."} className={"py-1.5 pl-4 w-64 outline-0 rounded-xl"}/>
                ) : props.type === "blog-detail" ? (
                    <Link to={"/"} className={"flex"}>
                        <img src={author?.avatar} alt="" className={"w-11 h-11 rounded-full border-solid"}/>
                        <div className={"ml-4 mt-1 flex flex-col justify-between"}>
                            <p className={"font-semibold"}>{author?.firstName} {author?.lastName}</p>
                            <p className={"text-xs text-gray-400"}>{moment(blog.createdAt).format("LL")}</p>
                        </div>
                    </Link>
                ): (<></>)}
            </div>
            <div className={""}>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-600">Light</span>

                <label className="inline-flex relative items-center cursor-pointer absolute top-2 ml-6">
                    {/*<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">Light</span>*/}
                    <input type="checkbox" value={""} className="sr-only peer outline-0"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white-300 dark:peer-focus:ring-white-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:bg-black peer-checked:bg-white"/>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">Night</span>
                </label>
                {/*Night/Light mode*/}
            </div>
        </div>
    )
}

export default HeaderBlog;
