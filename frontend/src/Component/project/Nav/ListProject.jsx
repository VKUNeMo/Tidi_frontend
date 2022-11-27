import React from "react";
import { useNavigate } from "react-router-dom"

import { FcDocument } from "react-icons/fc"
function ListProject() {
    const listProjects = [
        {
            id: 1,
            name: "abc",
        },
        {
            id: 2,
            name: "Mai phai lam",
        },
        {
            id: 3,
            name: "lam xong roi",
        }
    ]
    const navigate = useNavigate();

    function hanldeClick(e, member) {
        e.preventDefault();
        navigate(`project/${member.name}`);
    }
    const pro = listProjects.map(function (proo) {
        return (
            <div key={proo.name} className="pl-10 py-2 hover:bg-slate-400" onClick={(e) => hanldeClick(e, proo)}>
                <div className="inline-block mx-2">
                    <FcDocument></FcDocument>
                </div>
                <p className="inline-block "> {proo.name}</p>
            </div>
        )
    })
    return (
        <>
            {pro}
        </>

    )
}
export default ListProject;