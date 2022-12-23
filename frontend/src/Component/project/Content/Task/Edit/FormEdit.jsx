import React, { useState } from "react";
import { getProjectSuccess } from "../../../../../Redux/Slice/projectSlice";
import { editTask } from "../../../../../Redux/APIRequest/apiTaskRequest";
import { createAxios } from "../../../../../createInstance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function FormEdit({ data, handleClick }) {
    const [title, setTitle] = useState(data.title);
    const [des, setDes] = useState(data.description);
    const [dayStart, setDayStart] = useState({ dayStart: new Date() });
    const [dayEnd, setDayEnd] = useState({ dayEnd: new Date() });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getProjectSuccess);
    function handleEdit() {
        handleClick();
        const dataSend = {
            title: title,
            description: des,
            dayStart: dayStart,
            dayEnd: dayEnd,
            state: data.state,
        }
        editTask(dispatch, navigate, accessToken, axiosJWT, data._id, dataSend)
        console.log(dataSend);
    }
    return (
        <>
            <div className="p-4 w-full h-auto">
                <h1 className="text-center text-xl font-semibold">Add some new thing</h1>
                <form className="flex flex-col justify-center w-auto h-auto ">
                    <div className=" my-2 flex flex-col">
                        <label>Title</label>
                        <input type="text" className="p-4  border-b-slate-300 border-b focus: outline-none " value={title} onChange={e => setTitle(e.target.value)} placeholder="Title..."></input>
                    </div>
                    <div className=" my-2 flex flex-col">
                        <label>Description</label>
                        <textarea type="text" className="p-4  border-b-slate-300 border-b focus: outline-none " value={des} onChange={e => setDes(e.target.value)} placeholder="Description..."></textarea>
                    </div>
                    <div className=" my-2 flex flex-col">
                        <label>Day start</label>
                        <input type="date" className="p-4  border-b-slate-300 border-b focus: outline-none " value={dayStart} onChange={e => setDayStart(e.target.value)} placeholder="Date..."></input>
                    </div>
                    <div className=" my-2 flex flex-col">
                        <label>Day End</label>
                        <input type="date" className="p-4  border-b-slate-300 border-b focus: outline-none " value={dayEnd} onChange={e => setDayEnd(e.target.value)} placeholder="Date..."></input>
                    </div>
                    <div className=" flex justify-end">
                        <p onClick={handleEdit} className="mx-2 p-4 w-20 cursor-pointer text-center  rounded-lg bg-blue-300 border border-blue-300">Save</p>
                        <p onClick={handleClick} className="mx-2 p-4 w-20 cursor-pointer text-center rounded-lg border border-blue-300">Close</p>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FormEdit