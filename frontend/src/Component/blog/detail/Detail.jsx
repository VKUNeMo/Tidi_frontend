import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../../createInstance";
import {getBlogSuccess} from "../../../Redux/Slice/blogSlice";
import {getDetailBlog} from "../../../Redux/APIRequest/apiBlogRequest";
import {useParams} from "react-router-dom";
import config from "../../editor/config";
import HeaderBlog from "../header/Header.blog";

function Detail() {
    const editor = useRef(null);
    const {idBlog} = useParams();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const [data, setData] = useState([]);
    useEffect(() => {
        const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getBlogSuccess);
        getDetailBlog(dispatch, axiosJWT, idBlog).then(raw => {
            console.log(raw);
            const data = raw.data.blog.content;
            setData(raw.data.blog);
            editor.current = config(true, 'view-detail-blog', data);
        });
    }, [accessToken, dispatch, idBlog, refreshToken, user]);

    return (
        <div>
            <HeaderBlog type={"blog-detail"} data={data}/>
            <div id={"view-detail-blog"}/>
        </div>
    )
}

export default Detail;
