import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayData from "./DisplayData";
import { addUser} from "../features/User";

function UserForm() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <div className="UserForm">
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          Add User
        </button>
      </div>
      <DisplayData />
    </div>
  );
}

export default UserForm;
