import React from "react";
import { BsHouse, BsNewspaper } from "react-icons/bs";
import { AiOutlineFile, AiOutlineLogout, AiOutlineStar, AiOutlineUser, AiOutlineSetting } from "react-icons/ai"
import { logoutUser } from "../../Redux/APIRequest/apiAuthRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,NavLink } from "react-router-dom";
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

    const listsTop = [
        {
            icon: <BsHouse />,
            item: "home",
            itemLink: "/home",
        },
        {
            icon: <BsNewspaper />,
            item: "blog",
            itemLink: "blog",
        },
        {
            icon: <AiOutlineStar />,
            item: "likeBlog",
            itemLink: "likeBlog",
        },
        {
            icon: <AiOutlineFile />,
            item: "chi quen roi :(",
            itemLink: "test",
        }
    ]
    const listsUnder = [

        {
            icon: <AiOutlineSetting />,
            item: "setting :(",
            itemLink: "setting",
        },
        {
            icon: <AiOutlineUser />,
            item: "profile",
            itemLink: "profile",
        },
    ]
    const itemTop = listsTop.map((list, index) => {
        return (

            <NavLink className={`item_${index + 1}`} to={`${list.itemLink}`} key={index} exact isActive={console.log(list.index)}>
                <div className="p-4 text-2xl cursor-pointer rounded text-gray-900 hover:bg-gray-400 " >
                    {list.icon}

                </div>
            </NavLink >
        )
    })
    const itemUnder = listsUnder.map((list, index) => {
        return (
            <NavLink className={`item_${index + 1}`} to={`${list.itemLink}`} key={index}>
                <div className="p-4 text-2xl cursor-pointer rounded text-gray-900 hover:bg-gray-400 " >
                    {list.icon}
                </div>
            </NavLink >
        )
    })
    function handleLogOut() {
        logoutUser(dispatch, navigate, accessToken, axiosJWT);
    }

    return (
        <>
            <nav className="h-full flex items-center fixed flex-col border-r border-r-slate-300 justify-between z-50">
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
