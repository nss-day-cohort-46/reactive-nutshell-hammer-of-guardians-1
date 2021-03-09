import { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)

    useEffect(() => {
        getEvents()
    }, [])

    return (
        <>
            <h3 className="eventHeader">Events</h3>
            <div className="events">
                {
                    articles.map(event => {
                       return <EventCard key={event.id} event={event} />
                    })
                }   
            </div>
        </>

    )
}