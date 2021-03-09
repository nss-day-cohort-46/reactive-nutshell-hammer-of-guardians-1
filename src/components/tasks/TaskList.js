// created by nicole 
import { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Task.css"
import { useHistory } from "react-router"

export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)

    const history = useHistory()

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <>
        <h3 className="taskHeader">Tasks</h3>
        <div className="tasks">
            {
                tasks.map(task => {
                    return <TaskCard key={task.id} task={task} />
                })
            }
        </div>
        <div className="taskButtonDiv">
            <button className="addTaskButton" onClick={() => {history.pushState("/tasks/create")}}>
            Add Task
            </button>
        </div>
        
        </>

    )
}