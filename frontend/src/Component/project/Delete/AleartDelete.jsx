import React from "react";
import { getProjectSuccess } from "../../../Redux/Slice/projectSlice";
import { deleteProject } from "../../../Redux/APIRequest/apiProjectRequest";
import { createAxios } from "../../../createInstance";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AleartDelete({ project, handleClick }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getProjectSuccess);
    function handleDelete() {
        console.log(project._id)
        handleClick();
        deleteProject(dispatch, navigate, accessToken, axiosJWT, project._id)
    }
    return (
        <>
            <div className="flex flex-col justify-center w-full h-full items-center">
                <div className=" text-xl  uppercase p-4">
                    Do you want to delete this project ?
                </div>
                <div className="flex flex-row">
                    <p onClick={handleDelete} className="mx-2 p-4 w-20 cursor-pointer text-center  rounded-lg bg-red-500 border border-red-500">Delete</p>
                    <p onClick={handleClick} className="mx-2 p-4 w-20 cursor-pointer text-center rounded-lg border border-red-500">Close</p>
                </div>
            </div>

        </>
    )
}
export default AleartDelete;
