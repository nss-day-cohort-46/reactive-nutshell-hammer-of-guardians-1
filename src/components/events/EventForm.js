import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "../events/EventProvider"
import { useHistory, useParams } from "react-router-dom";
import "./Event.css"

export const EventForm = () => {
    const { addEvent, getEvents } = useContext(EventContext)

    const [events, setEvent] = useState({
        name: "",
        location: "",
        date: ""
    })

    const history = useHistory()

    useEffect(() => {
        getEvents()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEvent = { ...events }
        newEvent[event.target.id] = event.target.value
        setEvent(newEvent)
    }

    const handleClickSaveEvent = () => {
        if (events.name === "" || events.location === "" || events.date === "" ) {
            window.alert("Please complete all fields")
        } else {
            addEvent({
                name: events.name,
                location: events.location,
                date: events.date,
                userId: events.userId
            })
            .then(() => history.push("/events")) 
        }        
    }

    return (
        <form className="eventForm">
            <h2 className="newEvent">New Event</h2>
            <fieldset>
                <div>
                    <label htmlFor="name">Event: </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required className="form-control" placeholder="Event Name" value={events.name}></input>
                </div>
                <div>
                    <label htmlFor="location">Location: </label>
                    <input type="text" id="location" onChange={handleControlledInputChange} required className="form-control" placeholder="Location" value={events.location}></input>
                </div>
                <div>
                    <label htmlFor="date">Date: </label>
                    <input type="date" id="date" onChange={handleControlledInputChange} required className="form-control" value={events.date}></input>
                </div>
            </fieldset>
            <button className="btn btn-primary"
              onClick={event => {
                event.preventDefault()
              handleClickSaveEvent()
            }}>
              Save Event
            </button>
        </form>
    )
}

