import React from "react";
import { GrAdd } from "react-icons/gr"

function Todo({ name }) {
    function Kanban({ heading, taskList }) {
        return (
            <div className="h-full cursor-pointer">
                <div className="text-center font-semibold text-2xl">
                    {heading}
                </div>
                <div>
                    {taskList.map(function (task) {
                        return <>
                            <div className="flex flex-col p-2 m-2 rounded border">
                                <div className="font-semibold text-xl ">
                                    {task.name}
                                </div>
                                <div>
                                    {task.des}
                                </div>
                                <div className="text-center mt-4">
                                    {task.creatAt}
                                </div>
                            </div>
                        </>
                    })}
                </div>
                <div className="flex flex-row bg-blue-400 rounded m-2 p-2 justify-center  ">
                    <div className="my-auto ">
                        <GrAdd></GrAdd>
                    </div>
                    <p className="mx-2 "> Add task</p>
                </div>

            </div>
        )
    }
    const listTodo = [
        {
            id: 1,
            name: "todo1",
            des: "day la task moi day nha nho hoan thanh som nhe ",
            creatAt: "dd:mm:yy"
        },
    ]
    const listDoing = [
        {
            id: 2,
            name: "Doing 1",
            des: "day la task moi day nha nho hoan thanh som nhe ",
            creatAt: "dd:mm:yy"
        },
        {
            id: 5,
            name: "Doing 3",
            des: "day la task moi day nha nho hoan thanh som nhe ",
            creatAt: "dd:mm:yy"
        }
    ]
    const listDone = [
        {
            id: 3,
            name: "Done 2",
            des: "day la task moi day nha nho hoan thanh som nhe ",
            creatAt: "dd:mm:yy"
        },
    ]
    const listTest = [
        {
            id: 4,
            name: "test 1",
            des: "day la task moi day nha nho hoan thanh som nhe ",
            creatAt: "dd:mm:yy"
        },
    ]
    return (
        <>
            <div className="h-full w-full grid grid-cols-4  px-4">
                <Kanban heading={"Todo"} taskList={listTodo} ></Kanban>
                <Kanban heading={"Doing"} taskList={listDoing} ></Kanban>
                <Kanban heading={"Done"} taskList={listDone} ></Kanban>
                <Kanban heading={"Test"} taskList={listTest} ></Kanban>
            </div>
        </>
    )
}
export default Todo;