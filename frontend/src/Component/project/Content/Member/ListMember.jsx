import React, { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAxios } from "../../../../createInstance";
import { getProjectSuccess } from "../../../../Redux/Slice/projectSlice";
import { getAllMember } from "../../../../Redux/APIRequest/apiMemberRequest";
import Loading from "../../../loading/Loading"
import { AiOutlineUser } from "react-icons/ai"

function ListMember() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getProjectSuccess);
        getAllMember(accessToken, dispatch, axiosJWT, id).then(raw => {
            setData(raw.data);
            setIsLoading(false);
        });
    }, [accessToken, dispatch, id, refreshToken, user]);
    console.log(data)
    return (
        <>
            {isLoading ? <Loading /> : (data.map(function (member) {
                return (
                    <div key={member.id} className=" py-4  hover:bg-slate-400 cursor-pointer box-shadow-custom" >
                        <div className="inline-block mx-2" >
                            <AiOutlineUser></AiOutlineUser>
                        </div>
                        <p className="inline-block ">{`${member.idUser.firstName} ${member.idUser.lastName}`}</p>
                    </div>

                )
            }))}
        </>

    )
}
export default ListMember;