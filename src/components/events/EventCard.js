import React from "react"
import "./Event.css"
import { EventContext } from "./EventProvider"

export const EventCard = ({event}) => {

    return (
        <section className="eventCard">
            <h3 className="eventName">{event.name}</h3>
            <div className="eventLocation">{event.location}</div>
            <div className="eventDate">{event.date}</div>
        </section>
    )
}