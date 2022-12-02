import React, { useState } from "react";
import {
    useParams
} from "react-router-dom";
import ScheduleCompo from "./ScheduleCompo";
import CalendarCompo from "./CalendarCompo";
import Todo from "./Todo";
function DetailProject() {
    let { name } = useParams();
    console.log(name);
    const features = [
        {
            name: "Schedule",
            component: <ScheduleCompo name={name} />,
        },
        {
            name: "Calendar",
            component: <CalendarCompo name={name} />,
        },
        {
            name: "Todo List",
            component: <Todo name={name} />,
        },
        {
            name: "Calendar",
            component: <CalendarCompo name={name} />,
        },
        {
            name: "Calendar",
            component: <CalendarCompo name={name} />,
        },
    ]
    const [active, setActive] = useState(features[0].component);

    function handleClick(e, feature) {
        e.preventDefault();
        setActive(feature.component);
        console.log(feature);
    }

    const renderFeature = features.map(function (feature) {
        return (
            <>
                <div key={feature.name} className="inline-block px-4 p-2 cursor-pointer ">
                    <p
                        onClick={(e) => handleClick(e, feature)}>{feature.name}</p>
                </div>
            </>
        )
    })
    function handleDelete() {

    }
    return (
        <>
            <div className="h-full w-4/5">
                <div>
                    <input type="text" placeholder="Search" className="w-full p-4 mb-4 border-y-2   focus:outline-0 "></input>
                </div>
                <div className="px-4 pb-4  mb-2 border-b-2 flex flex-row justify-between align-center">
                    <div className=" text-5xl font-bold ">
                        {name}
                    </div>
                    <div className="px-4 relative top-0 bg-red-500 rounded-xl text-white flex ">
                        <button onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
                <div className="h-auto ">
                <div className="border-b-2 mb-2">
                    {renderFeature}
                </div>
                    {active}
                </div>
            </div>
        </>
    )
}
export default DetailProject;