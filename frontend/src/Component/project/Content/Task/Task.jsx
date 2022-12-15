import React, { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAxios } from "../../../../createInstance";
import { getProjectSuccess } from "../../../../Redux/Slice/projectSlice";
import { getAllOwnerTask } from "../../../../Redux/APIRequest/apiTaskRequest";
import Loading from "../../../loading/Loading"
import moment from "moment"
import BtnCreate from "./Create/BtnCreate";
import DetailTask from "./DetailTask";
import BtnDelete from "./Delete/BtnDelete";

function Task() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [idTask, setIdTask] = useState("");
    useEffect(() => {
        const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getProjectSuccess);
        getAllOwnerTask(accessToken, dispatch, axiosJWT, id).then(raw => {
            setData(raw.data);
            setIdTask(raw.data[0]._id)
            setIsLoading(false);
        });
    }, [accessToken, dispatch, id, refreshToken, user]);
    function handleSetIdTask(e, id) {
        e.preventDefault();
        console.log(id)
        setIdTask(id)
    }
    return (
        <>
            <div className="flex flex-row">
                {isLoading ? <Loading /> : (<div className="w-1/3 p-4 border-r border-r-gray-200 ">
                    {data.map(function (task) {
                        return (
                            <>
                                <div key={task._id} className="p-4 rounded border my-2 cursor-pointer" onClick={(e) => handleSetIdTask(e, task._id)}>
                                    <div className="flex flex-row justify-between">
                                        <div className="text-xl font-semibold">
                                            {task.title}
                                        </div>
                                        <div className="my-auto">
                                            <BtnDelete idTask={task._id}></BtnDelete>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-400  hidden md:flex md:flex-row-reverse">
                                        {moment(task.dayStart).format('DD/MM/YYYY')} -
                                        {moment(task.dayEnd).format('DD/MM/YYYY')}
                                    </div>
                                </div>
                            </>

                        )
                    })}
                    <BtnCreate id={id} state={1}></BtnCreate>
                </div>
                )}
                <div className="w-2/3">
                    <DetailTask idTask={idTask}></DetailTask>
                </div>
            </div>

        </>
    )
}
export default Task;