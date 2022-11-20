import React from "react";
import { BsHouse } from "react-icons/bs";
import { AiOutlineTeam, AiOutlineFolderOpen, AiOutlineFile, AiOutlineLogout } from "react-icons/ai"
import { logoutUser } from "../../Redux/APIRequest/apiAuthRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.login.token?.accessToken);

    function handleLogOut() {
        logoutUser(dispatch, navigate, token);
    }

    return (
        <>
            <nav className="h-full flex items-center fixed flex-col border-r border-r-slate-300 justify-between z-50">
                <div className="w-auto">
                    <div>
                        <img src="icon.png" alt="anh icon" className="w-14 h-14 object-cover cursor-pointer" />
                    </div>
                    <div className="p-4 text-2xl cursor-pointer rounded text-gray-300 hover:bg-gray-400 " >
                        <BsHouse />
                    </div>
                    <div className="p-4 text-2xl cursor-pointer rounded text-gray-300 hover:bg-gray-400 " >
                        <AiOutlineTeam />
                    </div>
                    <div className="p-4 text-2xl cursor-pointer rounded text-gray-300 hover:bg-gray-400 " >
                        <AiOutlineFolderOpen />
                    </div>
                    <div className="p-4 text-2xl cursor-pointer rounded text-gray-300 hover:bg-gray-400 " >
                        <AiOutlineFile />
                    </div>
                </div>
                <div className="p-4 text-2xl cursor-pointer rounded text-gray-300 text-red-700 hover:bg-gray-400" onClick={handleLogOut}>
                    <AiOutlineLogout alt="Đăng xuất" />
                </div>
            </nav>
        </>
    )
}

export default Nav;
