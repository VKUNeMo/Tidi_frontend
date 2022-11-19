import React from "react";
import { BsHouse } from "react-icons/bs";
import { AiOutlineTeam, AiOutlineFolderOpen, AiOutlineFile } from "react-icons/ai"


function Nav() {
    return (
        <>

            <nav className="h-full flex items-center fixed flex-col justify-start border-r border-r-slate-300">
                <div>
                    <img src="icon.png" alt="anh icon" className="w-14 h-14 object-cover cursor-pointer"></img>
                </div>
                <div className="p-4 m-2 text-2xl cursor-pointer text-gray-300  " >
                <BsHouse />
                </div>
                <div className="p-4 m-2 text-2xl cursor-pointer text-gray-300  " >
                <AiOutlineTeam />
                </div>
                <div className="p-4 m-2 text-2xl cursor-pointer text-gray-300  " >
                <AiOutlineFolderOpen />
                </div>
                <div className="p-4 m-2 text-2xl cursor-pointer text-gray-300  " >
                <AiOutlineFile />
                </div>
            </nav>
        </>
    )
}

export default Nav;