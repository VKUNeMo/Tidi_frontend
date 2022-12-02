import React from "react";
import { BsHouse, BsNewspaper, BsHouseFill } from "react-icons/bs";
import { AiOutlineFile, AiOutlineLogout, AiOutlineStar, AiOutlineUser, AiFillStar, AiOutlineSetting, AiFillSetting } from "react-icons/ai";
import { FaNewspaper, FaUserAlt } from "react-icons/fa";
import { logoutUser } from "../../Redux/APIRequest/apiAuthRequest";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate,useLocation } from "react-router-dom";
import { createAxios } from "../../createInstance";
import { logoutSuccess } from "../../Redux/Slice/authSlice";
function Nav() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, logoutSuccess);
    console.log(accessToken);

    function handleLogOut() {
        logoutUser(dispatch, navigate, accessToken, axiosJWT);
    }

    const listsTop = [
        {
            icon: <BsHouse />,
            iconActive: <BsHouseFill />,
            item: "home",
            itemLink: "/home",
        },
        {
            icon: <BsNewspaper />,
            iconActive: <FaNewspaper />,
            item: "blog",
            itemLink: "/blog",
        },
        {
            icon: <AiOutlineStar />,
            iconActive: <AiFillStar />,
            item: "likeBlog",
            itemLink: "/likeBlog",
        },
        {
            icon: <AiOutlineFile />,
            iconActive: <AiOutlineFile />,
            item: "chi quen roi :(",
            itemLink: "/test",
        }
    ]
    const listsUnder = [

        {
            icon: <AiOutlineSetting />,
            iconActive: <AiFillSetting />,
            item: "setting :(",
            itemLink: "/setting",
        },
        {
            icon: <AiOutlineUser />,
            iconActive: <FaUserAlt />,
            item: "profile",
            itemLink: "/profile",
        },
    ]
    const location = useLocation();
    const itemTop = listsTop.map((list, index) => {
        return (
            <NavLink className={`item_${index + 1}`} to={`${list.itemLink}`} key={index} exact>
                {!(location.pathname.includes(list.itemLink)) ?
                    (<div className="p-4 text-2xl cursor-pointer rounded text-gray-700 hover:bg-gray-300 " >
                        {list.icon}
                    </div>) : (<div className="p-4 text-2xl cursor-pointer text-black border-r border-black" >
                        {list.iconActive}
                    </div>)}
            </NavLink >
        )
    })
    const itemUnder = listsUnder.map((list, index) => {
        return (
            <NavLink className={`item_${index + 1}`} to={`${list.itemLink}`} key={index}>
                {!(location.pathname.includes(list.itemLink)) ?
                    (<div className="p-4 text-2xl cursor-pointer rounded text-gray-900 hover:bg-gray-300 " >
                        {list.icon}
                    </div>) : (<div className="p-4 text-2xl cursor-pointer text-gray-900 border-r border-black" >
                        {list.iconActive}
                    </div>)}
            </NavLink >
        )
    })

    return (
        <>
            <nav className="h-screen flex items-center float-left flex-col border-r border-r-slate-300 justify-between z-50">
                <div className="w-auto">
                    <div>
                        <img src="icon.png" alt="anh icon" className="w-14 h-14 object-cover cursor-pointer" />
                    </div>
                    {itemTop}
                </div>
                <div>
                    {itemUnder}
                    <div className="p-4 text-2xl cursor-pointer rounded text-red-700 hover:bg-gray-400" onClick={handleLogOut}>
                        <AiOutlineLogout />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;
