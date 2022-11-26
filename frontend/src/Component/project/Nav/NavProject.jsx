import React from "react";
import { AiOutlineProject, AiFillProject } from "react-icons/ai";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { useLocation, NavLink } from "react-router-dom";
import ListProject from "./ListProject";
import ListMember from "./ListMember";

function NavProject() {
    const location = useLocation();
    const listFeature = [
        {
            icon: <HiOutlineUserGroup />,
            iconActive: <HiUserGroup />,
            item: "/home/member",
            itemLink: "/home/member",
            name: "Member",
        },
        {
            icon: <AiOutlineProject />,
            iconActive: <AiFillProject />,
            item: "/home/project",
            itemLink: "/home/project",
            name: "Project",
        },
    ]
    const renderList = listFeature.map(function (list, index) {
        return (
            <>
                <NavLink className={`item_${index + 1}`} to={`${list.itemLink}`} key={list.name} exact="true">
                    {!(location.pathname.includes(list.itemLink)) ?
                        (<div className="p-4 text-xl cursor-pointer rounded text-gray-700 hover:bg-gray-300 " >
                            <div className="inline-block mx-2">
                                {list.icon}
                            </div>
                            <p className="inline-block mx-2">{list.name}</p>
                        </div>) :
                        (
                            <>
                                <div className="p-4 text-xl cursor-pointer text-black
                                     bg-gray-200 font-medium border-r border-black" >
                                    <div className="inline-block mx-2">
                                        {list.iconActive}
                                    </div>
                                    <p className="inline-block mx-2">{list.name}</p>
                                </div>
                                {
                                    list.name === "Project" ? <div>
                                        <ListProject></ListProject>
                                    </div> :
                                        <ListMember></ListMember>
                                }
                            </>)}
                </NavLink >

            </>

        )
    })
    return (
        <div id="project" className="h-full w-1/5 min-w-fit border-r border-r-gray-200 py-4 ">
            <div className="text-center text-xl p-2">
                <h1>Tidi.works</h1>
            </div>
            <div className="">
                {renderList}
            </div>
        </div>
    )
}
export default NavProject