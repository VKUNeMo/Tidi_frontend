import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addNewBlog} from "../../Redux/APIRequest/apiBlogRequest";
import config from "../editor/config";
import {createAxios} from "../../createInstance";
import {addSuccess} from "../../Redux/Slice/blogSlice";


function BlogCreate() {
    let editor = {isReady: false};
    useEffect(()=>{
        if(!editor.isReady){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            editor = config();
        }
    },[]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);

    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, addSuccess);
    const handleStore = async ()=>{
        await editor.save().then(async (outputData) => {
            const title = outputData.blocks[0].data.text;
            const data = {title: title, content: outputData}
            await addNewBlog(accessToken, data, dispatch, navigate, axiosJWT);
        }).catch((error) => {
            console.log('Saving failed: ', error);
        });
    }
    return (
        <div>
            <div className={"flex justify-between items-center px-8 py-2 border-solid border-0 border-b-2 border-b-gray-200"}>
                <div className={""}>
                    {/*<input type="text" placeholder={"Title..."} className={"py-2 pl-4 w-64 outline-0 rounded-xl"}/>*/}
                    <button className={"ml-4 py-2 px-4 rounded border-0 cursor-pointer"} onClick={handleStore}>Save</button>
                </div>
                <div className={""}>
                    Night/Light mode
                </div>
            </div>
            <div id="editorjs"/>
        </div>
    )
}

export default BlogCreate;
