import React, { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { createAxios } from "../../../../createInstance";
import { getProjectSuccess } from "../../../../Redux/Slice/projectSlice";
import { getAllOwnerTask } from "../../../../Redux/APIRequest/apiTaskRequest";
import Loading from "../../../loading/Loading"
import BtnCreate from "./Create/BtnCreate";

function ListTask({ }) {
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
        getAllOwnerTask(accessToken, dispatch, axiosJWT, id).then(raw => {
            setData(raw.data)
            setIsLoading(false);
        });
    }, [accessToken, dispatch, id, refreshToken, user]);
    console.log(data);
    return (
        <>
            <div className="w-full">
                <span>List task</span>
               <BtnCreate></BtnCreate>
            </div>

        </>
    )
}
export default ListTask;