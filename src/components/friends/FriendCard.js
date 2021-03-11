import React from "react"
import "./Friend.css"

export const MessageCard = ({ friend }) => (
    <section className="friend__card">
        <div className="friend__user">{friend.user.name}</div>
        <div className="friend__time">{friend.user.email}</div>
    </section>
)