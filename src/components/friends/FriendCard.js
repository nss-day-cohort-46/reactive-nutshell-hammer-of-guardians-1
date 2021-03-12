import React from "react"
import "./Friend.css"

export const FriendCard = ({ friend }) => (
    <section className="friend">
        <h3>{friend.user.name}</h3>
        <div className="friend__time">{friend.user.email}</div>
    </section>
)