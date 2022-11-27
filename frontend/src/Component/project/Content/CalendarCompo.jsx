import React from "react";


function CalendarCompo({ name }) {
    console.log(name);
    return (
        <>
            <div className="h-full w-4/5">
                calendarComCalendarCompo day 1 of {name}
            </div>
        </>
    )
}
export default CalendarCompo;