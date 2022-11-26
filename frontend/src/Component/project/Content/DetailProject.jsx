import React from "react";
import {
    useParams
} from "react-router-dom";

function DetailProject() {
    let { name } = useParams();
    console.log(name);
    return (
        <>
            <div className="h-full w-4/5">
                <div>
                    <input type="text" placeholder="Search" className="w-full p-4 mb-4 border-y-2   focus:outline-0 "></input>
                </div>
                <div className="p-4 text-5xl font-bold">
                    {name}
                </div>
            </div>
        </>
    )
}
export default DetailProject;