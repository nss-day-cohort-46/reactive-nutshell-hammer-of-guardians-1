import React, { useState, createContext } from "react"

// Create Message Context export 
export const MessageContext = createContext()

// set value equal to Message useState variable, get request, post, and delete functions.
export const MessageProvider = (props) => {
    const [messages, setMessages] = useState([])
    
    // MessageProvider will fetch saved Messages from the database. We will use this to render the Message List.
    const getMessages = () => {
        return fetch("http://localhost:8088/messages?_expand=user")
        .then(res => res.json())
        .then(setMessages)
    }

    // Will also need fetch calls with a POST and DELETE Method.
    const addMessage = messageObj => {
        return fetch("http://localhost:8088/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageObj)
        })
        .then(getMessages)
    }

    
    // MessageProvider returns MessageContext.Provider.
    return (
        <MessageContext.Provider value={{
            messages, getMessages, addMessage
            }}>
                {props.children}
        </MessageContext.Provider>
    )
}