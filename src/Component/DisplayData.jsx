import React from 'react'
import { deleteUser, updateUsername } from "../features/User";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import './DisplayData.css'


function DisplayData() {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
  
    const [newUsername, setNewUsername] = useState("");
  return (
    <div className="displayUsers">
    {userList.map((user) => {
      return (
        <div>
          <h1> {user.name}</h1>
          <h1> {user.username}</h1>
          <input
            type="text"
            placeholder="New Username..."
            onChange={(event) => {
              setNewUsername(event.target.value);
            }}
          />
          <button
            onClick={() => {
              dispatch(
                updateUsername({ id: user.id, username: newUsername })
              );
            }}
          >
            Update Username
          </button>
          <button
            onClick={() => {
              dispatch(deleteUser({ id: user.id }));
            }}
          >
            Delete User
          </button>
        </div>
      );
    })}
  </div>
  )
}

export default DisplayData