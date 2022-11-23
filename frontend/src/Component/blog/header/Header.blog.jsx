import React from "react";

const HeaderBlog = () => {
    return (
        <div
            className={"flex sticky top-0 bg-white justify-between items-center px-8 py-2 border-solid border-0 border-b-2 border-b-gray-200"}>
            <div className={"my-0.5"}>
                <input type="text" placeholder={"Title..."} className={"py-1.5 pl-4 w-64 outline-0 rounded-xl"}/>
            </div>
            <div className={""}>
                Night/Light mode
            </div>
        </div>
    )
}

export default HeaderBlog;
