import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../users/UserProvider"
import { FriendContext } from "./FriendProvider"

export const FriendList = () => {
    const { friends, getFriends } = useContext(FriendContext)
    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
        .then(getFriends)
    }, [])

    const history = useHistory()

    const [ users, setUsers ] = useState([])


}