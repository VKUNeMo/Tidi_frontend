import {instance} from "../../createInstance";

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

export const changeAvatar = async (data, dispatch, axiosJWT) => {
    return await axiosJWT.post("/v1/user/change/avatar", data);
}

export const changeInfo = async (data, axiosJWT, idUser) => {
    return await axiosJWT.post(`/v1/user/edit/${idUser}`, data);
}
