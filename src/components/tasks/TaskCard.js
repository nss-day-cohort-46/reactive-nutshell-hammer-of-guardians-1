//created by nicole 
import React, { useContext, useState } from "react"
import "./Task.css"
import { TaskContext } from "./TaskProvider"
import { useHistory } from "react-router-dom"

export const TaskCard = ({ task }) => {

    const history = useHistory();
    const { getTasks, updateTask, deleteTask } = useContext(TaskContext)

    // User can select if task is complete. Will change isComplete in db to have t/f value. then will update tasks. then will re-render
    const handleControlledInputChange = (event) => {
        if (event.target.checked === true) {
            task.isComplete = true
        } else {
            task.isComplete = false
        }
        updateTask({
            id: task.id,
            userId: task.userId,
            name: task.name,
            completionDate: task.completionDate,
            isComplete: task.isComplete
        })
            .then(() => history.push('/tasks'))


    }

    const handleDelete = () => {
        deleteTask(task.id)
            .then(() => {
                history.push("/tasks")
            })
    }
    return (
        <section className="taskCard">
            <h3 className="taskName">{task.name}</h3>
            <div className="taskCompletionDate">Complete by: {task.date}</div>
            <div className="taskCheckbox">
                Task completed
                <input type="checkbox" id="taskComplete" onChange={handleControlledInputChange} 
                required autoFocus className="form-control" value={task.isComplete} defaultChecked={task.isComplete ? true : false} />
            </div>
            <button onClick={handleDelete}> delete </button>
        </section>
    )
}
