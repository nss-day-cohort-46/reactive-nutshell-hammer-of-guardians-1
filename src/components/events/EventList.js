import { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"
import { useHistory } from "react-router"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)
    // const { events, setEvent } = useContext(EventContext)

    const history = useHistory()

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <h3 className="eventHeader">Events</h3>
            <div className="events">
                {
                    events.map(event => {
                       return <EventCard key={event.id} event={event} />
                    })
                }   
            </div>
            <div className="eventButtonDiv">
                <button className="event__button"  onClick={() => {history.push("/events/create")}}>Add Event</button>
            </div>
        </>
    )
}