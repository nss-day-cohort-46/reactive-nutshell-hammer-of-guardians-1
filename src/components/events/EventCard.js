import React, {useContext, useEffect, useState} from "react"
import { useHistory } from "react-router-dom"
import "./Event.css"
import { EventContext } from "./EventProvider"
import { useParams } from "react-router-dom";
import {  } from "module";

export const EventCard = () => {

    const {eventId} = useParams()
    const { deleteEvent, updateEvent, getEventById } = useContext(EventContext)
    const history = useHistory()
    const [event, setEvent] = useState({})

    // useEffect(() => {
    //     getEventById(eventId)
    //         .then(response => {
    //             setEvent(response)
    //         })
    //     }, [])
    
        
    const handleDelete = () => {
        deleteEvent(event.id)
        .then(() => {
            history.push("/events")
        })
    }

    const handleEditEvent = () => {
        updateEvent(event.id)
        .then(() => {
            history.push(`/events/edit/${event.id}`)
        })
    }

    return (
        <section className="eventCard">
            <h3 className="eventName">{event.name}</h3>
            <div className="eventLocation">{event.location}</div>
            <div className="eventDate">{event.date}</div>
                <button className="editButton" onClick={handleEditEvent}> Edit Event </button>
                <button className="removeEventButton" onClick={handleDelete}> Remove Event </button>
        </section>
    )
}