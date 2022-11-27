import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

const BlogProfile = (props) => {
    const blogs = props.blog;
    const user = props.user
    return (
        <div>
            <div className={"mt-4"}>
                <h1 className={"mb-6 mx-6"}>All articles</h1>
                <ul>
                    {blogs.map(blog => (
                        <li key={blog._id} className={"mx-6 border-solid border-0 border-t-2 border-gray-400 hover:bg-gray-500 min-h-80px"}>
                            <Link to={`/blog/view/${blog._id}`} className={"w-full py-2 mx-2 px-2"}>
                                <div className={"mx-6"}>
                                    <div className={"flex justify-between w-fit"}>
                                        <div>
                                            <img src={user.avatar} alt="" className={"w-10 h-10 rounded-2xl bg-black"}/>
                                        </div>
                                        <div className={"ml-2"}>
                                    <span>
                                        <p className={"font-semibold"}>
                                            {user.firstName + " " + user.lastName + " "}
                                        </p>
                                        <p className={"font-thin text-gray-400"}>
                                            Updated at {moment(blog.createdAt).format("HH:MM A • LL")}
                                        </p>
                                    </span>
                                        </div>
                                    </div>

                                    <h2 className={"mb-2"}>
                                        {blog.title}
                                    </h2>
                                    <p className={"mb-2"}>{blog.content.blocks[1].data.text}</p>
                                    {blog.status ? (
                                        <span className={"bg-blue-500 py-1 px-2 rounded"}>
                                                    Public
                                                </span>
                                    ):(
                                        <span className={"bg-red-400 py-1 px-2 rounded"}>
                                                    Private
                                                </span>
                                    )
                                    }
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BlogProfile;
