import { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {

    const [friends, setFriends] = useState([])

    
    const getFriends = (id) => {
        return fetch(`http://localhost:8088/friends?_expand=user&currentUserId=${id}`)
        .then(response => response.json())
        .then(setFriends)
    }
    
    return (
        <FriendContext.Provider value={{
            friends, getFriends
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}