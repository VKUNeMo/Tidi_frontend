import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Project from "../project/Project";

function Home() {
    const isLogin = useSelector(state => state.auth.login.success);

    return (
        <>
            <div className=' bg-neutral-50  bg-opacity-60 w-full h-screen relative' >
            <Project></Project>
                <div className="float-right">
                    {isLogin ||
                        (
                            <>
                                <Link to={"/login"}>Login</Link>
                                <Link to={"/register"}>Register</Link>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default Home;
