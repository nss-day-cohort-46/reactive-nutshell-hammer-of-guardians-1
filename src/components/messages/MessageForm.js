// Import our react hooks
import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "../messages/MessageProvider"
import { useHistory } from "react-router-dom"

// Necessary Context, css, history and params from react router dom.

// export MessageForm function, grab get Message components from Message context.

export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext)


    const [message, setMessage] = useState({
        "id": "",
        "userId": 0,
        "text": "",
        "time": ""
    });

    const history = useHistory();


    const handleControlledInputChange = (event) => {
      const newMessage = { ...message }
      let selectedVal = event.target.value
      if (event.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
      }
      newMessage[event.target.id] = selectedVal
      setMessage(newMessage)
    }

    const handleClickSaveMessage = (event) => {
      event.preventDefault()
      const userId = message.userId
        addMessage(message)
        .then(() => history.push("/messages"))
    }

    return (
      <form className="messageForm">
          <h2 className="messageForm__title">New Message</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Date" value={message.time}/>
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="text">Message</label>
                  <input type="text" id="text" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="New Message" value={message.text}/>
              </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveMessage}>
            Save Message
          </button>
      </form>
    )
}