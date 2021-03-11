//created by nicole 
import { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Task.css"
import { useHistory } from "react-router"


export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)
    let currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
    useEffect(() => {
        getTasks()
    }, [])

    let userTasks = tasks.filter(task => currentUser === task.userId)
    const history = useHistory()


    return (
        <>
            <h3 className="taskHeader"> <p>Tasks</p> </h3>
            <div className="tasks">
                {
                    userTasks.map(task => !task.isComplete ? 
                <TaskCard key={task.id} task={task} /> : <div key={task.id}></div>
                        )
                }
            </div>
            <div className="taskButtonDiv">
                <button className="addTaskButton" onClick={() => { history.push("/tasks/create") }}>
                    Add Task
            </button>
            </div>

        </>

    )
}