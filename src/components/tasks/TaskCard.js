import React from "react"
import "./Task.css"
import { TaskContext } from "./TaskProvider"
import { useHistory } from "react-router-dom"

export const TaskCard = ({task}) => {

    // const { deleteTask } = useContext(TaskContext)

    const history = useHistory();
    
    return (
        <section className="taskCard">
        <h3 className="taskName">{task.name}</h3>
        <div className="taskCompletionDate">Complete by: {task.date}</div>
        <div>
            Task completed  
            <input type="checkbox" id="taskComplete" className="taskCompleted"/>
        </div>
    </section>
    )
}
