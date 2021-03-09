/*Import react hooks, message context, message.css, useHistory and usePrams from react-router-dom 
useContext message Context {message delete function}
useHistory()
define MessageDelete function call deletemessagefunction(message.id)
.then push "/messages"
maybe a useEffect goes here????

Create MessageCard function, pass in {message}.
returns the html representation of the card.
Use dot notation to access each message property.
Include a delete button that is tied to each messages id.
Our delete button will include an onClick which calls our messageDelete Function.
 */

import React from "react"
import "./Message.css"

export const MessageCard = ({ message, user }) => (
    <section className="message">
        <div className="message__user">{user?.name}</div>
        <div className="message__time">{message.time}</div>
        <div className="message__text">{message.text}</div>
    </section>
)