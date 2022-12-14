import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAxios } from "../../../../createInstance";
import { getProjectSuccess } from "../../../../Redux/Slice/projectSlice";
import { getDetailTask } from "../../../../Redux/APIRequest/apiTaskRequest";
import Loading from "../../../loading/Loading"
import moment from "moment"
function DetailTask({ idTask }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getProjectSuccess);
        getDetailTask(dispatch, axiosJWT, idTask).then(raw => {
            setData(raw);
            setIsLoading(false);
        });
    }, [accessToken, dispatch, idTask, refreshToken, user]);
    console.log(idTask);
    console.log(data);
    return (
        <>
            {isLoading ? <Loading /> : (<div className="w-full p-4">
                detail
            </div>)}
        </>
    )
}
export default DetailTask;