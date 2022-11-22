import React, {useState} from "react";
import {getAllOwnerBlog} from "../../Redux/APIRequest/apiBlogRequest";
import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../createInstance";
import {getBlogSuccess} from "../../Redux/Slice/blogSlice";
import {Link, useLocation} from "react-router-dom";
import moment from "moment";

function View() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.login.token);
    const refreshToken = token?.refreshToken;
    const accessToken = token?.accessToken;
    const user = useSelector(state => state.auth.login.currentUser);
    const axiosJWT = createAxios(user, accessToken, refreshToken, dispatch, getBlogSuccess);
    getAllOwnerBlog(accessToken, dispatch, axiosJWT).then(data=> setData(data.data.blogs));
    const url = useLocation();
    return (
        <div className={""}>
            <h1>Articles</h1>
            <ul>
            {data.map(blog => (
                <li key={blog._id} className={"mx-6 border-solid border-0 border-b-2 hover:bg-gray-500 min-h-80px"}>
                    <Link to={`${url.pathname}/../${blog._id}`} className={"w-full py-2 mx-2 px-2"}>
                        <div className={"mx-6"}>
                            <h2 className={"mb-2"}>
                                {blog.title}
                            </h2>
                            <p>{blog.content.blocks[1].data.text}</p>
                            <p> • {moment(blog.createdAt).format("HH:MM LL")}</p>
                        </div>
                    </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default View;
