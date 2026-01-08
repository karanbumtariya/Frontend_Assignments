import { useContext } from "react";
import { ThemeContext } from "./Task10ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "200px",
        padding: "20px",
        background: theme === "light" ? "#fff" : "#111",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h2>Home Page</h2>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Home;
