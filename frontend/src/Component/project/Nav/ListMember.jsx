import React from "react";
import { useNavigate } from "react-router-dom"
import { AiOutlineUser } from "react-icons/ai"
function ListMember() {
    const navigate = useNavigate();
    const ListMembers = [
        {
            id: 1,
            name: "Quoc Dung",
        },
        {
            id: 2,
            name: "Minh Tri",
        },
    ]
    function hanldeClick(e, member) {
        e.preventDefault();
        navigate(`member/${member.id}`);
    }
    const mem = ListMembers.map(function (member) {
        return (
            <div key={member.id} className="pl-10 py-2 hover:bg-slate-400" onClick={(e) => hanldeClick(e, member)}>
                <div className="inline-block mx-2">
                    <AiOutlineUser></AiOutlineUser>
                </div>
                <p className="inline-block "> {member.name}</p>
            </div>

        )
    })
    return (
        <>
            {mem}
        </>

    )
}
export default ListMember;