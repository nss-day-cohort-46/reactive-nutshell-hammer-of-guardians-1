import { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {

    const [ friends, setFriends ] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
        .then(response => response.json())
        .then(setFriends)
    }

    const addFriend = friendObj => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(getFriends)
    }

    const deleteFriend = friendId => {
        return fetch(`http://localhost:8088/articles/${friendId}`, {
            method: "DELETE"
        })
        .then(getFriends)
    }


    return (
       <FriendContext.Provider value={{
           friends, getFriends, addFriend, deleteFriend
       }}>
           {props.children}
       </FriendContext.Provider>
    )

}
