import React, {useState} from "react";
import {createAxios, instance} from "../../../createInstance";
import {useDispatch, useSelector} from "react-redux";
import {getBlogSuccess} from "../../../Redux/Slice/blogSlice";
import {changeAvatar} from "../../../Redux/APIRequest/apiUserRequest";
import {loginSuccess} from "../../../Redux/Slice/authSlice";

const DetailProfile = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getBlogSuccess);
    const [avatar, setAvatar] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await convertToBase64(avatar);
        changeAvatar({avatar: data}, dispatch, axiosJWT).then(rs => {
            dispatch(loginSuccess({user: rs.data, token: {accessToken, refreshToken}}));
        });
    }

    const convertToBase64 = (avatar) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(avatar);
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }
    return(
        <div>
            <div>
                <form onSubmit={event => handleSubmit(event)} encType={"multipart/form-data"}>
                    <input type="file" id={"avatar"} name={"avatar"} onChange={e => setAvatar(e.target.files[0])}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default DetailProfile;
