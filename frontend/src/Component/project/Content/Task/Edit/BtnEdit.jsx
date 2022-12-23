import React, { useState, useEffect, useRef } from "react";
import FormEdit from "./FormEdit";
function BtnEdit({data}) {
    function handleCreate() {
        setIsComponentVisible(pre => !pre);
    }

    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(false);
    function useComponentVisible(initialIsVisible) {
        const [isComponentVisible, setIsComponentVisible] = useState(
            initialIsVisible
        );
        const ref = useRef(null);
        const handleClickOutside = event => {

            if (ref.current && !ref.current.contains(event.target)) {
                setIsComponentVisible(false);
                console.log("out");
            }
        };

        useEffect(() => {
            document.addEventListener("click", handleClickOutside, true);
            return () => {
                document.removeEventListener("click", handleClickOutside, true);
            };
        });

        return { ref, isComponentVisible, setIsComponentVisible };
    }
    return (
        <>
            <div>
                <span className="p-4 bg-blue-300 rounded float-right cursor-pointer" onClick={handleCreate}>Edit</span>
            </div>
            {isComponentVisible &&
                <div className="fixed top-0 left-0 bottom-0 right-0 z-40 bg-black bg-opacity-30" >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  bg-white w-1/3 h-auto" ref={ref}>
                        <FormEdit data={data} handleClick={handleCreate}></FormEdit>
                    </div>
                </div>

            }
        </>
    )
}
export default BtnEdit;