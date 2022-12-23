import React, { useState } from "react";
import { getProjectSuccess } from "../../../../../Redux/Slice/projectSlice";
import { createAxios } from "../../../../../createInstance";
import { useDispatch, useSelector } from "react-redux";
import {
    useParams
} from "react-router-dom";
import { editRoleMember } from "../../../../../Redux/APIRequest/apiMemberRequest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function EditRole({ userEdit, roleEdit, handleVisibleEditRole }) {
    console.log(userEdit);
    const [firstName, setfirstName] = useState(userEdit.firstName);
    const [lastName, setlastName] = useState(userEdit.lastName);
    const [role, setRole] = useState(roleEdit);
    let { id } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getProjectSuccess);

    function handleEdit(e) {
        e.preventDefault();
        handleVisibleEditRole();
        const data = {
            idMember: userEdit._id,
            idProject: id,
            role: role,
        }
        editRoleMember(dispatch, accessToken, axiosJWT, id, data).then(async rs => {
            await toast.success("Thành đổi thành công", { autoClose: 1000 });
        })
            .catch(err => toast.error("Thay đổi thông tin không thành công", { position: "top-right", autoClose: 1500 }));
    }
    return (
        <>
            <div className="p-4 w-full h-auto">
                <h1 className="text-center text-xl font-semibold" >Edit Role for Member</h1>
                <form className="flex flex-col justify-center w-auto h-auto ">
                    <div className="my-2 flex flex-row">
                        <div className="">
                            <label>First Name</label>
                            <input type="text" className="p-4  border-b-slate-300  border-none  focus: outline-none disabled:opacity-75" value={firstName} onChange={e => setfirstName(e.target.value)} placeholder="First Name..."></input>
                        </div>
                        <div className=" ">
                            <label>Last Name</label>
                            <input type="text" className="p-4  border-b-slate-300  border-none  focus: outline-none disabled:opacity-75 " value={lastName} onChange={e => setlastName(e.target.value)} placeholder="Last Name..."></input>
                        </div>
                    </div>
                    <div className=" my-2 flex flex-col">
                        <label>Role</label>
                        <select name="gender" value={role} onChange={e => setRole(e.target.value)} className="appearance-none block w-full  border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:border-gray-500">
                            <option value="">---Select---</option>
                            <option value="0">Manager</option>
                            <option value="1">Staff</option>
                        </select>
                    </div>
                    <div className=" flex justify-end">
                        <p onClick={handleEdit} className="mx-2 p-4 w-20 cursor-pointer text-center  rounded-lg bg-blue-300 border border-blue-300">Save</p>
                        <p onClick={handleVisibleEditRole} className="mx-2 p-4 w-20 cursor-pointer text-center rounded-lg border border-blue-300">Close</p>
                    </div>
                </form>
            </div>
        </>
    )
}
export default EditRole;