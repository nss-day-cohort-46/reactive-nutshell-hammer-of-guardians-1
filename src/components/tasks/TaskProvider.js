//created by nicole
import { useState, createContext } from "react"

export const TaskContext = createContext()

export const TaskProvider = (props) => {

    const [ tasks, setTasks ] = useState([])

    const getTasks = () => {
        return fetch ("http://localhost:8088/tasks")
        .then(response => response.json())
        .then(setTasks)
    }

    const addTask = taskObj => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObj)
    })
    .then(getTasks)
    }
    
    const deleteTask = taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
        .then(getTasks)
    }

    return (
        <TaskContext.Provider value={{
            tasks, getTasks, addTask, deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}      