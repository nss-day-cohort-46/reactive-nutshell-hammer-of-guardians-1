import React from "react"
import "./Friend.css"

export const FriendCard = ({ friend }) => (
    <section className="friend__card">
        <h2>${friend.name}</h2>
        <div className="friend__time">{friend.email}</div>
    </section>
)