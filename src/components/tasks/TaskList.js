//created by nicole 
import { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Task.css"
import { useHistory } from "react-router"


export const TaskList = () => {
    const { tasks, getTasks } = useContext(TaskContext)

    //grab userId from key nutshell_user
    let currentUser = parseInt(sessionStorage.getItem("nutshell_user"))
    useEffect(() => {
        getTasks()
    }, [])
    
    //only grab task with userId === current userId
    let userTasks = tasks.filter(task => currentUser === task.userId)
    const history = useHistory()


    //on line 29 check to see if task is not complete. if so, render any task that is not complete. completed tasks will not appear on DOM
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