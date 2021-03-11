import { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import "./Event.css"
import { useHistory } from "react-router"

export const EventList = () => {
    const { events, getEvents } = useContext(EventContext)
    const [userEvents, setUserEvents] = useState([])

    const currentUserId = +sessionStorage.getItem("nutshell_user")

    const history = useHistory()

    useEffect(() => {
        getEvents(currentUserId)
    }, [])

    useEffect(() => {
        const sortByDate = events.sort((a, b) => new Date(a.date) - new Date(b.date))
        setUserEvents(sortByDate)
    }, [events])

    return (
        <>
            <h3 className="eventHeader">Events</h3>
            <div className="events">
                {
                    userEvents.map(event => {
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