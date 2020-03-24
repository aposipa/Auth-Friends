import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Friend(props) {
    const [friend, setFriend] = useState({});

    useEffect(() => {
        setFriend(props.friend);
    }, [props.friend]);

    function deleteFriend() {
        axiosWithAuth()
          .delete(`/api/friends/${friend.id}`)
          .then(res => {
            alert("You didn't need this friend anyway");
            console.log("deleted", res);
          })
          .catch(err => console.log("error deleting friend", err))
          .finally(() => window.location.reload());
      }

    return (
        <div>
            <h1>{friend.name}</h1>
            <p>Age: {props.friend.age}</p>
            <p>Email: {friend.email}</p>
            <button onClick={deleteFriend}>Delete Friend from your Life</button>
        </div>
    )
    

}

export default Friend;