import {addFailed, addStart, addSuccess, getBlogFail, getBlogStart, getBlogSuccess} from "../Slice/blogSlice";
import {instance} from "../../createInstance";

const addNewBlog = async (accessToken, data, dispatch, navigate, axiosJWT) => {
    dispatch(addStart());
    try {
        await axiosJWT.post("/v1/user/blogs/store", data);
        dispatch(addSuccess("Success"));
        navigate("/blog/my-blog");
    } catch (err) {
        dispatch(addFailed("Failed"));
    }
}

const getAllOwnerBlog = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getBlogStart());
    try {
        const data = await axiosJWT.get("/v1/user/blogs/all");
        dispatch(getBlogSuccess());
        return data;
    } catch (err) {
        dispatch(getBlogFail("Lỗi"));
    }
}

const getAllPublicBlog = async (dispatch, axiosJWT) => {
    dispatch(getBlogStart());
    try {
        const data = await instance.get("/v1/user/blogs/public/all");
        dispatch(getBlogSuccess());
        return data;
    } catch (err) {
        dispatch(getBlogFail("Lỗi"));
    }
}

const getDetailBlog = async (dispatch, axiosJWT, idBlog) => {
    dispatch(getBlogStart());
    try {
        const data = await axiosJWT.get(`/v1/user/blogs/${idBlog}`);
        const checkStorage = await axiosJWT.get(`/v1/user/blogs/storage/check/${idBlog}`);
        dispatch(getBlogSuccess({data, checkStorage}));
        return data;
    } catch (err) {
        dispatch(getBlogFail("Lỗi"));
    }
}

const editBlog = async (dispatch, navigate, accessToken, axiosJWT, idBlog, data) => {
    try {
        await axiosJWT.post(`/v1/user/blogs/edit/${idBlog}`, data);
        navigate("/blog/my-blog");
    } catch (err) {
        console.log(err);
    }
}

const deleteBlog = async (dispatch, navigate, accessToken, axiosJWT, idBlog) => {
    try {
        await axiosJWT.delete(`/v1/user/blogs/delete/${idBlog}`);
        navigate("/blog/my-blog");
    } catch (err) {
        console.log(err);
    }
}

const getStorageBlog = async (dispatch, accessToken, axiosJWT) => {
    try {
        return await axiosJWT.get("/v1/user/blogs/storage/all");
    } catch (err) {
        console.log(err);
    }
}

const addStorage = async (dispatch, accessToken, idBlog, axiosJWT) => {
    // try{
    //     const data = {idBlog: idBlog}
    //     return await axiosJWT.post("/v1/user/blogs/storage/add", data);
    // }catch(err){
    //     console.log(err);
    // }
    const data = {idBlog: idBlog}
    return await axiosJWT.post("/v1/user/blogs/storage/add", data);
}

const deleteStorage = async (dispatch, accessToken, idBlog, axiosJWT) => {
    try{
        await axiosJWT.post("/v1/user/blogs/storage/delete/"+idBlog);
    }catch(err){
        console.log(err);
    }
}

export {addNewBlog, getAllOwnerBlog, getAllPublicBlog, getDetailBlog, editBlog, deleteBlog, getStorageBlog, addStorage, deleteStorage};
