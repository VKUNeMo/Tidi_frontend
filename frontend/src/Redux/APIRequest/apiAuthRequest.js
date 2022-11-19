import instance from "../../createInstance";
import {
    registerStart,
    registerSuccess,
    registerFail,
    loginSuccess,
    loginStart,
    loginFail,
    logoutSuccess,
    logoutStart,
    logoutFail
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
        dispatch(loginSuccess(data));
        navigate("/home");
    }catch (err){
        const msg = err.response?.data.message ?? "";
        dispatch(loginFail(msg));
    }
}

export const logoutUser = async (dispatch, navigate, accessToken)=>{
    dispatch(logoutStart());
    try {
        await instance.post("v1/auth/logout", '', {headers: {token: `Bearer ${accessToken}`}});
        dispatch(logoutSuccess());
        alert("Đăng xuất thành công");
        navigate("/login");
    }catch (err){
        dispatch(logoutFail());
    }
}
