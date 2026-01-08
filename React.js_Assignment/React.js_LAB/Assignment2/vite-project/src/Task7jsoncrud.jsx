import React, { useEffect, useState } from "react";

const API = "http://localhost:5000/users";

const JsonServerCRUD = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // GET
  const fetchUsers = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST
  const addUser = () => {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    }).then(() => {
      fetchUsers();
      setName("");
      setEmail("");
    });
  };

  // DELETE
  const deleteUser = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    }).then(fetchUsers);
  };

  // PUT (full update)
  const updateUser = (id) => {
    fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, name, email }),
    }).then(fetchUsers);
  };

  // PATCH (partial update)
  const patchUser = (id) => {
    fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    }).then(fetchUsers);
  };

  return (
    <div>
      <h2>JSON Server CRUD</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />
      <button onClick={addUser}>Add (POST)</button>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
                <button onClick={() => updateUser(u.id)}>Put</button>
                <button onClick={() => patchUser(u.id)}>Patch</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JsonServerCRUD;
