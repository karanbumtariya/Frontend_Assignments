import { useEffect, useState } from "react";
import { db } from "./Task8Firebase.js";


import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const CrudFirebase = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const usersRef = collection(db, "users");

  const fetchUsers = async () => {
    const data = await getDocs(usersRef);
    setUsers(data.docs.map((d) => ({ ...d.data(), id: d.id })));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE
  const addUser = async () => {
    await addDoc(usersRef, { name });
    setName("");
    fetchUsers();
  };

  // DELETE
  const deleteUser = async (id) => {
    await deleteDoc(doc(db, "users", id));
    fetchUsers();
  };

  // UPDATE
  const updateUser = async (id) => {
    const newName = prompt("Enter new name");
    await updateDoc(doc(db, "users", id), { name: newName });
    fetchUsers();
  };

  return (
    <div>
      <h2>Firebase CRUD</h2>

      <input
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addUser}>Add</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name}
            <button onClick={() => updateUser(u.id)}>Edit</button>
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudFirebase;
