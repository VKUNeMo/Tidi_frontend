import React, { useRef } from "react";
import { BiGroup } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";


function Project() {
    const ref = useRef();
    console.log(ref);
    return (
        <div id="project" className="h-full w-full border-r border-r-gray-200 py-4">
            <div className="text-center text-xl p-2">
                <h1>Tidi.works</h1>
            </div>
            <div className="">
                <div className="p-4 text-xl cursor-pointer rounded text-gray-900 hover:bg-gray-400" ref={ref}>
                    <div className="inline-block mx-4">
                        <BiGroup />
                    </div>
                    <span>Member</span>
                </div>
                <div className="p-4 text-xl cursor-pointer rounded text-gray-900 hover:bg-gray-400 " >
                    <div className="inline-block mx-4">
                        <AiOutlineSchedule />
                    </div>
                    <span>Project</span>
                </div>
            </div>


        </div>
    )
}
export default Project