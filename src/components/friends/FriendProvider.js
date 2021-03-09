import { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {

    const [ friends, setFriends ] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
        .then(response => response.json())
        .then(setFriends)
    }

    const addFriend = articleObj => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then(getFriends)
    }

    const deleteFriend = articleId => {
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