import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "../events/EventProvider"
import { useHistory, useParams } from "react-router-dom";

export const EventForm = () => {
    const { addEvent } = useContext(EventContext)

    const [newEvent, setEvent] = useState({
        name: "",
        location: "",
        date: ""
    })
}

