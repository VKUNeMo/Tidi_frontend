import {addFailed, addStart, addSuccess, getBlogFail, getBlogStart, getBlogSuccess} from "../Slice/blogSlice";

const addNewBlog = async (accessToken, data, dispatch, navigate, axiosJWT) =>{
    dispatch(addStart());
    try{
        await axiosJWT.post("/v1/user/blogs/store", data, {headers: {token: `Bearer ${accessToken}`}});
        dispatch(addSuccess("Success"));
        navigate("/blog/my-blog");
    }catch(err){
        dispatch(addFailed("Failed"));
    }
}

const getAllOwnerBlog = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getBlogStart());
    try {
        const data = await axiosJWT.get("/v1/user/blogs/all", '', {header: {token: `Bearer ${accessToken}`}});
        dispatch(getBlogSuccess());
        return data;
    }catch (err){
        dispatch(getBlogFail("Lỗi"));
    }
}

const getAllPublicBlog = async (dispatch, axiosJWT) => {
  dispatch(getBlogStart());
  try{
      const data = await axiosJWT.get("/v1/user/blogs/public/all", '');
      dispatch(getBlogSuccess());
      return data;
  }catch(err){
      dispatch(getBlogFail("Lỗi"));
  }
}

const getDetailBlog = async (dispatch, axiosJWT, idBlog) => {
    dispatch(getBlogStart());
    try {
        const data = await axiosJWT.get(`/v1/user/blogs/${idBlog}`, '');
        dispatch(getBlogSuccess());
        return data;
    }catch (err){
        dispatch(getBlogFail("Lỗi"));
    }
}

export {addNewBlog, getAllOwnerBlog, getAllPublicBlog, getDetailBlog};
