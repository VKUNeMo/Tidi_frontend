import React, { useState } from "react";
import {
    useParams
} from "react-router-dom";
import ScheduleCompo from "./ScheduleCompo";
import CalendarCompo from "./CalendarCompo";
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
        }
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
                <div className="inline-block px-4 cursor-pointer">
                    <p
                        onClick={(e) => handleClick(e, feature)}>{feature.name}</p>
                </div>
            </>
        )
    })
    return (
        <>
            <div className="h-full w-4/5">
                <div>
                    <input type="text" placeholder="Search" className="w-full p-4 mb-4 border-y-2   focus:outline-0 "></input>
                </div>
                <div className="p-4 text-5xl font-bold border-b-2 mb-2">
                    {name}
                </div>
                <div>
                    {renderFeature}
                    {active}
                </div>
            </div>
        </>
    )
}
export default DetailProject;