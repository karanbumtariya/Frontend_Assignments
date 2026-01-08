import { useEffect, useState } from "react";

const ApiWithLoader = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);   
  const [error, setError] = useState(null);       

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);        
      })
      .catch((err) => {
        setError(err.message);    
        setLoading(false);        
      });
  }, []);

  
  if (loading) {
    return <h2>Loading data...</h2>;   
  }

  
  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }


  return (
    <div>
      <h2>User List</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApiWithLoader;
