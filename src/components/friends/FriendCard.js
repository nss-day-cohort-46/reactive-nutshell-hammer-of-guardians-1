import React from "react"
import "./Friend.css"

export const MessageCard = ({ friend }) => (
    <section className="friend__card">
        <h2>${user.name}</h2>
        <div className="friend__isfriend">{isFriend}</div>
        <div className="friend__time">{friend.user.email}</div>
    </section>
)