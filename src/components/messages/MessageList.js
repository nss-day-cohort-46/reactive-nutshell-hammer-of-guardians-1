// Import history from react router dom, useEffect useContext useState from react and Message Card, Message.css.
import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { useHistory } from "react-router-dom"
import "./Message.css"

// Make MessageList function, import Message Context, useContext(MessageContext), bring in messages, getMessages
export const MessageList = () => {
    const { messages, getMessages, deleteMessage } = useContext(MessageContext)
    
    // Setting state to an empty array, declaring our state variable of Message, and our callback function of setMessages
    const [message, setMessages] = useState([])
    const history = useHistory();
    const currentUser = parseInt(sessionStorage.getItem("nutshell_user"))

    // useEffect will call getMessages(), our dependency array will remain empty. This will not run again.
    useEffect(() => {
        console.log("MessageList: useEffect - getMessages")
        getMessages()
    }, [])

    useEffect(() => {
        const sortByDate = messages.sort((a, b) => b.time - a.time)
        setMessages(sortByDate)
    }, [messages])

    const handleDelete = (id) => {
        console.log("this is the delete button", id)
        deleteMessage(id)
        .then(() => {
            history.push("/messages")
        })
    }

    const UserDelete = (message) => {
        if (currentUser === message.userId) {
            return (
                <button className="btn btn-primary" onClick={() => handleDelete(message.id)}> Delete </button>
            )
        }
    }
    
    // MessageList will return the html representation for our Messages page. 
    // Add Message button with onClick which will push us to /Messages/create
    // Message.map() for every Message return MessageCard with a key of {Message.id} and Message={Message}.
    return (
        <div className="messages__component">
            {console.log("MessageList: Render", messages)}
            <h2>Messages</h2>
            <div className="messages">
                {messages.map(message => {
                    return (
                    <div className="message">
                        <MessageCard key={message.id} message={message} />
                        {UserDelete(message)}
                    </div>)
                })}
            </div>
            <button className="btn btn-primary" onClick={() => { history.push("/messages/create") }}>
                Add Message
            </button>
        </div>
    )
}