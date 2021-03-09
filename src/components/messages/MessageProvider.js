import React, { useState, createContext } from "react"
/* MessageProvider will fetch saved Messages from the database.
We will use this to render the Message List.
Create Message Context export 
useState([]) variables [messages, setMessages].
MessageProvider returns MessageContext.Provider.
set value equal to Message useState variable, get request, post, and delete functions.


Will also need fetch calls with a POST and DELETE Method.
*/

export const MessageContext = createContext()

export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])

    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
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