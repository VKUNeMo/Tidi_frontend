import React, { useState } from "react";


function FormCreate({ handleClick }) {
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    function handleAdd() {
        handleClick();
    }
    return (
        <>
            <div className="p-4 w-full h-auto">
                <h1 className="text-center text-xl font-semibold">New Todo</h1>
                <form className="flex flex-col justify-center w-auto h-auto ">
                    <div className=" my-2 flex flex-col">

                        <label>Title</label>
                        <input type="text" className="p-4  border-b-slate-300 border-b focus: outline-none " value={title} onChange={e => setTitle(e.target.value)} placeholder="Title..."></input>
                    </div>
                    <div className=" my-2 flex flex-col">
                        <label>Description</label>
                        <textarea type="text" className="p-4  border-b-slate-300 border-b focus: outline-none " value={des} onChange={e => setDes(e.target.value)} placeholder="Description..."></textarea>
                    </div>
                    <div className=" flex justify-end">
                        <p onClick={handleAdd} className="mx-2 p-4 w-20 cursor-pointer text-center  rounded-lg bg-blue-300 border border-blue-300">Add</p>
                        <p onClick={handleClick} className="mx-2 p-4 w-20 cursor-pointer text-center rounded-lg border border-blue-300">Close</p>
                    </div>
                </form>
            </div>
        </>
    )
}
export default FormCreate