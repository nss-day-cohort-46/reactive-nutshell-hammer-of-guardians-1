// Import our react hooks
import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "../messages/MessageProvider"
import { useHistory } from "react-router-dom"

// Necessary Context, css, history and params from react router dom.

// export MessageForm function, grab get Message components from Message context.

export const MessageForm = () => {
    const { addMessage, getMessages } = useContext(MessageContext)


    const [message, setMessage] = useState({
        "id": "",
        "userId": 0,
        "text": "",
        "time": ""
    });

    const history = useHistory();

    useEffect(() => {
      getMessages()
    }, [])


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
      if (message.text === "" ) {
        window.alert("Please enter a message")
    } else { 
        addMessage({
          userId: message.userId,
          text: message.text,
          timestamp: message.timestamp
        })

        .then(() => history.push("/messages"))
    }
  }

    return (
      <form className="messageForm">
          <h2 className="messageForm__title">New Message</h2>
          <fieldset>
              <div className="form-group">
                  <label htmlFor="text">Message</label>
                  <textarea cols="10" rows="5" name="text" id="text" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="New Message" value={message.text}></textarea>
              </div>
          </fieldset>
          <button className="btn btn-primary" onClick={handleClickSaveMessage}>
            Save Message
          </button>
      </form>
    )
}