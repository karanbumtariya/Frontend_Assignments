import { useContext } from "react";
import { AuthContext } from "./Task11AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: "20px" }}>
      {user ? (
        <h2>Welcome back, {user.name}! </h2>
      ) : (
        <h2>Please log in to continue </h2>
      )}
    </div>
  );
};

export default Dashboard;
