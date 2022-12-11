import React, { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAxios } from "../../../createInstance";
import { getProjectSuccess } from "../../../Redux/Slice/projectSlice";
import { getDetailProject } from "../../../Redux/APIRequest/apiProjectRequest";
import ScheduleCompo from "./ScheduleCompo";
import Task from "./Task/Task";
import Loading from "../../loading/Loading"
import Todo from "./Todo/Todo";
import { AiOutlineEdit } from "react-icons/ai"
import BtnCreate from "../Create/BtnCreate";
import BtnDelete from "../Delete/BtnDelete";
function DetailProject() {
    let { id } = useParams();
    const [key, setKey] = useState('');
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getProjectSuccess);
        getDetailProject(dispatch, axiosJWT, id).then(raw => {
            setData(raw.data[0].idProject)
            setIsLoading(false);
        });
    }, [accessToken, dispatch, id, refreshToken, user]);

    const features = [
        {
            name: "Schedule",
            component: <ScheduleCompo id={id} />,
        },
        {
            name: "Task",
            component: <Task data={data} />,
        },
        {
            name: "Todo List",
            component: <Todo data={data} />,
        },
    ]
    const [active, setActive] = useState(features[0].component);
    function handleClick(e, feature) {
        e.preventDefault();
        setActive(feature.component);
    }
    const renderFeature = features.map(function (feature) {
        return (
            <>
                <div key={feature.name} className="inline-block px-4 p-2 cursor-pointer ">
                    <p
                        onClick={(e) => handleClick(e, feature)}>{feature.name}</p>
                </div>
            </>
        )
    })
    function handleDelete() {
        console.log(data);
    }

    return (
        <>
            {isLoading ? <Loading /> : (<div className="h-screen w-full  relative lg:w-4/5">
                <div className="w-full flex flex-row border-y-2 justify-between p-4">
                    <div className="w-1/2 ">
                        <input type="text" placeholder="Search" value={key} onChange={e => setKey(e.target.value)} className="w-full rounded-md  p-4 bg-slate-200 focus:outline-0 "></input>
                    </div>
                    <BtnCreate></BtnCreate>
                </div>

                <div className="p-4 border-b-2 flex flex-row justify-between align-center m-auto">
                    <div className=" text-5xl font-bold " >
                        {data.title}
                    </div>
                    <div className="h-full flex flex-row">
                        <div className="p-4  bg-slate-200 rounded-xl flex mx-2 cursor-pointer">
                            <button onClick={handleDelete} >
                                <AiOutlineEdit></AiOutlineEdit>
                            </button>
                        </div>
                        <div className="p-4  bg-red-500 rounded-xl flex mx-2 cursor-pointer">
                            <BtnDelete project={data}></BtnDelete>
                        </div>
                    </div>
                </div>
                <div className="h-auto ">
                    <div className="border-b-2 mb-2">
                        {renderFeature}
                    </div>
                    {active}
                </div>
            </div>
            )}
        </>
    )
}
export default DetailProject;