import React, { useContext, useEffect, useState } from "react"
import { FriendContext } from "./FriendProvider"
import { FriendCard } from "./FriendCard"

export const FriendList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    const sessionId = parseInt(sessionStorage.getItem("nutshell_user"))

    useEffect(() => {
        getFriends(sessionId)
    }, [])

    return (
        <div className="friends__component">
        <h2>Friends</h2>
            <div className="friends">
            {friends.map(friend => <FriendCard key={friend.id} friend={friend} />        
            )}
            </div>
        </div>
    )
}