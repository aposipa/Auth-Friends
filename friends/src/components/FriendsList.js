import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Friend";
import FriendsForm from "./FriendsForm";

function FriendsList() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => setFriends(res.data))
        .catch(err => alert("Friends List not Working", err));
    }, []);

    function getData() {
        axiosWithAuth()
        .get("/api/friends")
        .then(res => setFriends(res.data))
        .catch(err => alert("Friends List not Working", err));
    }


    function addFriends(friend) {
        axiosWithAuth()
        .post("/api/friends", friend)
        .then(res => {
            getData();
            console.log(res)
        });
    }

    return (
        <div>
            <h1> Here's all the friends you have! </h1>
            {friends.map(friend => {
                return <Friend key={friend.id} friend={friend} />
            })}
            <FriendsForm addFriends={addFriends} />
        </div>
    )
}

export default FriendsList;