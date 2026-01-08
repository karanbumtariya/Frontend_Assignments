import React, { useEffect, useState } from "react";

const Task2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // [] = component mount par sirf ek baar chalega

  return (
    <div>
      <h2>User List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task2;
