<<<<<<< Updated upstream
import React, { useRef } from "react";
=======
import React from "react";
>>>>>>> Stashed changes
import { BiGroup } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";


function Project() {
  
    return (
        <div id="project" className="h-full w-1/5 border-r border-r-gray-200 py-4">
            <div className="text-center text-xl p-2">
                <h1>Tidi.works</h1>
            </div>
            <div className="">
                <div className="p-4 text-xl cursor-pointer rounded text-gray-900 hover:bg-gray-400" >
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