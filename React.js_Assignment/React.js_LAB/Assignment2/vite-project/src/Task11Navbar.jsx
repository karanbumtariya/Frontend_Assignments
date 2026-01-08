import { useContext, useState } from "react";
import { AuthContext } from "./Task11AuthContext";

const Navbar = () => {
  const { user, login, logout } = useContext(AuthContext);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "10px", background: "#eee" }}>
      {user ? (
        <>
          <span>Welcome, {user.name} 👋</span>
          <button onClick={logout} style={{ marginLeft: "10px" }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={() => login(name)}>Login</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
