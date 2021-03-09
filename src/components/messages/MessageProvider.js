import React, { useState, createContext } from "react"
/* ArticleProvider will fetch saved articles from the database.
We will use this to render the Article List.
Create Article Context export 
useState([]) variables [articles, setArticles].
ArticleProvider returns ArticleContext.Provider.
set value equal to article useState variable, get request, post, and delete functions.


Will also need fetch calls with a POST and DELETE Method.
*/

export const MessageContext = createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8088/messages")
        .then(res => res.json())
        .then(setMessages)
    }

    return (
        <MessageContext.Provider value={{
            messages, getMessages
            }}>
                {props.children}
        </MessageContext.Provider>
    )
}