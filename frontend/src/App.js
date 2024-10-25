// frontend/src/App.js

import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://vercel-eight-delta-92.vercel.app//api/users"
    );
    setUsers(response.data);
  };

  const addUser = async () => {
    if (name) {
      const response = await axios.post(
        "https://vercel-eight-delta-92.vercel.app//api/users",
        { name }
      );
      setUsers([...users, response.data]);
      setName("");
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add a new user"
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;
