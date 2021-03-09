import React, { useState, createContext } from "react"
/* ArticleProvider will fetch saved articles from the database.
We will use this to render the Article List.
Create Article Context export 
useState([]) variables [articles, setArticles].
ArticleProvider returns ArticleContext.Provider.
set value equal to article useState variable, get request, post, and delete functions.


Will also need fetch calls with a POST and DELETE Method.
*/

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