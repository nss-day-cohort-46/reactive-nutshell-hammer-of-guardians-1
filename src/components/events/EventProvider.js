import { useState, createContext } from "react"
/* eventProvider will fetch saved events from the database.
We will use this to render the event List.
Create event Context export 
useState([]) variables [events, setevents].
eventProvider returns eventContext.Provider.
set value equal to event useState variable, get request, post, and delete functions.


Will also need fetch calls with a POST and DELETE Method.
*/
export const EventContext = createContext()

export const EventProvider = (props) => {

    const [ events, setEvents ] = useState([])

    const getEvents = () => {
        return fetch("http://localhost:8088/events")
        .then(response => response.json())
        .then(setEvents)
    }

    const updateEvent = (eventObj) => {
        return fetch(`http://localhost:8088/events/${eventObj.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          }, 
          body: JSON.stringify(eventObj)
        })
        .then(getEvents)
      }

    const addEvent = eventObj => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
        .then(getEvents)
    }

    const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
        .then(getEvents)
    }


    return (
       <EventContext.Provider value={{
           events, getEvents, addEvent, deleteEvent, updateEvent
       }}>
           {props.children}
       </EventContext.Provider>
    )

}