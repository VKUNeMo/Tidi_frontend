import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../createInstance";
import {getBlogSuccess} from "../../Redux/Slice/blogSlice";
import {getDetailBlog} from "../../Redux/APIRequest/apiBlogRequest";
import {useParams} from "react-router-dom";
import config from "../editor/config";
import ReactDOM from "react-dom";

import {createReactEditorJS} from "react-editor-js";

import {EDITOR_JS_TOOLS} from "../editor/constants";

function Detail() {
    let ReactEditorJS = createReactEditorJS();

    const [data, setData] = useState([]);
    const {idBlog} = useParams();
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    let editor = {isReady: false};

    useEffect(() => {
        const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getBlogSuccess);
        getDetailBlog(dispatch, axiosJWT, idBlog).then(data => {
            setData(data.data.blog.content);
            console.log(data.data.blog.content);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken, dispatch, refreshToken, user, idBlog]);

    const handle = () => {
        console.log(JSON.stringify(data));
    }
    return (
        <div>
            <ReactEditorJS
                tools={EDITOR_JS_TOOLS}
                data={data}
            />
            <button onClick={handle}>Check</button>
        </div>
    )
}

export default Detail;
