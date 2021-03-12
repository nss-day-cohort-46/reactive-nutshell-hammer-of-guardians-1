import React, { useContext, useEffect, useState } from "react"
import { FriendContext } from "./FriendProvider"
import { FriendCard } from "./FriendCard"

export const FriendList = () => {
    const { friends, getFriends } = useContext(FriendContext)

    useEffect(() => {
        getFriends(sessionUser)
    }, [])

    const sessionUser = parseInt(sessionStorage.getItem("nutshell_user"))

    return (
        <div className="friendList">
            {friends.map(friend => {
                return <FriendCard key={friend.id}
                    friend={friend} />        
            })}
        </div>
    )
}