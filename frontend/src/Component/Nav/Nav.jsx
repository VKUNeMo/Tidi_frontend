import React from "react";
import {BsHouse} from "react-icons/bs";
import {AiOutlineTeam, AiOutlineFolderOpen, AiOutlineLogout} from "react-icons/ai"
import {FaRegUserCircle} from "react-icons/fa"
import {logoutUser} from "../../Redux/APIRequest/apiAuthRequest";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {createAxios} from "../../createInstance";
import {logoutSuccess} from "../../Redux/Slice/authSlice";
import {MdArticle} from "react-icons/md";


function Nav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, logoutSuccess);

    function handleLogOut() {
        logoutUser(dispatch, navigate, accessToken, axiosJWT);
    }

    return (
        <nav className="h-screen bg-white flex items-center fixed flex-col border-solid border-0 border-r-2 border-r-gray-200 justify-between z-50 top-0 w-12">
            <div className="">
                <div>
                    <img src={`${__dirname}icon.png`} alt="anh icon" className="w-12 h-12 object-cover cursor-pointer"/>
                </div>
                <Link to={"/"} className="text-2xl py-3 rounded hover:bg-gray-400 hover:text-black flex justify-center text-gray-400">
                    <BsHouse/>
                </Link>
                <Link to={"/"} className="text-2xl py-3 rounded hover:bg-gray-400 hover:text-black flex justify-center text-gray-400">
                    <AiOutlineTeam/>
                </Link>
                <Link to={"/"} className="text-2xl py-3 rounded hover:bg-gray-400 hover:text-black flex justify-center text-gray-400">
                    <AiOutlineFolderOpen/>
                </Link>
                <Link to={"/blog/article"} title={"Blog"} className="text-2xl py-3 rounded hover:bg-gray-400 hover:text-black flex justify-center text-gray-400">
                    <MdArticle/>
                </Link>
            </div>

            <div className="w-12">
                <Link to={"/profile/me/blog"} title={"Profile"} className="text-2xl py-3 rounded hover:bg-gray-400 hover:text-black flex justify-center text-gray-400">
                    <FaRegUserCircle/>
                </Link>
                <div className="text-2xl py-3 mb-6 cursor-pointer rounded hover:bg-gray-400 text-red-600 flex justify-center"
                     onClick={handleLogOut}>
                    <AiOutlineLogout/>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
