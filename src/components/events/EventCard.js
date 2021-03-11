import React, {useContext} from "react"
import { useHistory } from "react-router"
import "./Event.css"
import { EventContext } from "./EventProvider"

export const EventCard = ({event}) => {

    const { deleteEvent } = useContext(EventContext)
    const history = useHistory()

    const handleDelete = () => {
        deleteEvent(event.id)
        .then(() => {
            history.push("/events")
        })
    }

    return (
        <section className="eventCard">
            <h3 className="eventName">{event.name}</h3>
            <div className="eventLocation">{event.location}</div>
            <div className="eventDate">{event.date}</div>
                <button className="removeEventButton" onClick={handleDelete}>Remove Event</button>
        </section>
    )
}