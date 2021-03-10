import React from "react"
import "./Task.css"
import { TaskContext } from "./TaskProvider"

export const TaskCard = ({task}) => {

    return (
        <section className="taskCard">
        <h3 className="taskName">{task.name}</h3>
        <div className="taskCompletionDate">Complete by: {task.date}</div>
        {/* <input type="checkbox" className="taskCompleted"> </input> */}
    </section>
    )
}
