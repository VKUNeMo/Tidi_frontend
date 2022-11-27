import {instance} from "../../createInstance";
import {
    loginFail,
    loginStart,
    loginSuccess,
    logoutFail,
    logoutStart,
    logoutSuccess,
    registerFail,
    registerStart,
    registerSuccess
} from "../Slice/authSlice";

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try{
        await instance.post("v1/auth/register", user);
        dispatch(registerSuccess());
        navigate("/login");
    }catch(err){
        dispatch(registerFail());
    }
}

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const data = await instance.post("v1/auth/login", user);
        dispatch(loginSuccess(data.data));
        navigate("/home");
    }catch (err){
        const msg = err.response?.data.message ?? "";
        dispatch(loginFail(msg));
    }
}

export const logoutUser = async (dispatch, navigate, accessToken, axiosJWT)=>{
    dispatch(logoutStart());
    try {
        await axiosJWT.post("v1/auth/logout", '', {headers: {token: `Bearer ${accessToken}`}});
        dispatch(logoutSuccess());
        alert("Đăng xuất thành công");
        navigate("/login");
    }catch (err){
        console.log(err);
        dispatch(logoutFail());
    }
}

export const getInfo = async (idUser) => {
    try{
        return instance.get(`/v1/user/info/${idUser}`);
    }catch(err){
        console.log(err);
    }
}

export const changePassword = async (data, dispatch, axiosJWT) => {
    return await axiosJWT.post("/v1/user/change/password", data);
}
