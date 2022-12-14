import React from "react";
import DetailTask from "./DetailTask";
import ListTask from "./ListTask";


function Task() {
    
    return (
        <>
            <div className="h-full w-4/5 flex flex-row justify-around">
                <div className="w-1/2">
                   <ListTask></ListTask>
                </div>
                <div className="w-1/2">
                    <DetailTask></DetailTask>
                </div>
            </div>
        </>
    )
}
export default Task;