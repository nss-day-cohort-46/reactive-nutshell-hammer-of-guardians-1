//created by
import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider.js"
import { useHistory } from 'react-router-dom';
import "./Task.css"

export const TaskForm = () => {
    const { addTask } = useContext(TaskContext)

    const [task, setTask] = useState({
        name: "",
        date: "",
        userId: 0
    });

    const history = useHistory();

    // useEffect(() => {
    //     getTasks()
    // }, [])

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newTask = { ...task }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers. This will cover both customer and location ids
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        /* Animal is an object with properties.
        Set the property to the new value
      using object bracket notation. */
        newTask[event.target.id] = selectedVal
        // update state
        setTask(newTask)
    }

    const handleClickSaveTask = (event) => {
        // if (taskId === 0) {
        //     window.alert("Please select a task")
        // } else {
            event.preventDefault()
            const userId = task.userId
        // event.preventDefault() //Prevents the browser from submitting the form
            addTask(task)
                .then(() => history.push("/tasks"))
        
    
    }


    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task: </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task name" value={task.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Due Date: </label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Due Date" value={task.dueDate} />
                </div>
            </fieldset>
            
            <button className="btn btn-primary"
                onClick={handleClickSaveTask}>
                Save Task
            </button>
        </form>
    )
}