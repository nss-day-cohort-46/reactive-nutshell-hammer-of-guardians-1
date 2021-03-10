import React, { useState, createContext } from "react"

export const TaskContext = createContext()

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([])

    const getTasks = () => {
        return fetch("http://localhost:8088/tasks")
        .then(res => res.json())
        .then(setTasks)
    }

    return (
        <TaskContext.Provider value={{
            tasks, getTasks
            }}>
                {props.children}
        </TaskContext.Provider>
    )
}