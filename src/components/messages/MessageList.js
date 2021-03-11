// Import history from react router dom, useEffect useContext useState from react and Message Card, Message.css.
import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { UserContext } from "../users/UserProvider"
import { useHistory } from "react-router-dom"
import "./Message.css"

// Make MessageList function, import Message Context, useContext(MessageContext), bring in messages, getMessages
export const MessageList = () => {
    const { users, getUsers } = useContext(UserContext)
    const { messages, getMessages } = useContext(MessageContext)
    
    // Setting state to an empty array, declaring our state variable of Message, and our callback function of setMessages
    const [message, setMessages] = useState([])

    const history = useHistory();
    
    // useEffect will call getMessages(), our dependency array will remain empty. This will not run again.
    useEffect(() => {
        console.log("MessageList: useEffect - getMessages")
        getUsers()
        .then(getMessages)
        .then((response) => {
            setMessages(response)
          })
    }, [])
    
    // MessageList will return the html representation for our Messages page. 
    // Add Message button with onClick which will push us to /Messages/create
    // Message.map() for every Message return MessageCard with a key of {Message.id} and Message={Message}.
    
    return (
        <div className="messages__component">
            {console.log("MessageList: Render", messages)}
            <h2>Messages</h2>
            <div className="messages">

                {messages.map(message => {
                    const sessionUserId = sessionStorage.getItem("nutshell_user")
                    const currentUser = users.find(user => user.id === parseInt(sessionUserId))
                    return <MessageCard key={message.id} message={message} user={currentUser} />
                })}

            </div>
            <button className="btn btn-primary" onClick={() => { history.push("/messages/create") }}>
                Add Message
            </button>
        </div>
    )
}