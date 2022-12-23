import React from "react";
import { AiFillGithub, AiFillMail, AiFillFacebook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function GetStarted() {
    const navigate = useNavigate();
    function handleNavigate() {
        navigate("/project")
    }
    return (
        <>
            <div className="ml-12">
                <div className="flex flex-row w-full justify-around p-4 pl-10">
                    <div className=" flex  w-1/3 items-center justify-centers items-center ">
                        <div className="flex flex-col  ">
                            <span className="text-5xl font-extrabold uppercase tracking-wide py-4">
                                Don't worry. <br />
                                <span>we are here for every solution.</span><br />
                                <span className="text-3xl text-gray-800">Let't Started</span>
                            </span>
                            <span className="p-4 bg-blue-300 w-1/2 mx-auto rounded cursor-pointer text-center box-shadow-custom py-4" onClick={handleNavigate}>
                                Project Now
                            </span>

                        </div>
                    </div>
                    <div className="w-2/3">
                        <img src={`${__dirname}getStarted.png`} alt="Girl in a jacket" className="c" />
                    </div>

                </div>
                <div className="flex flex-row justify-center">
                    <div className="px-4 text-2xl text-gray-600">
                        <AiFillGithub></AiFillGithub>
                    </div>
                    <div className="px-4 text-2xl text-gray-600">
                        <AiFillMail></AiFillMail>
                    </div>
                    <div className="px-4 text-2xl text-gray-600">
                        <AiFillFacebook></AiFillFacebook>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GetStarted;