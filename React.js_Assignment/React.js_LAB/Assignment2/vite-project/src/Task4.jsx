import React, { useState, useRef } from "react";

const Task4 = () => {
  const [count, setCount] = useState(0);

  const renderCount = useRef(0);
  renderCount.current += 1;   // ye change hoga but re-render nahi karega

  const inputRef = useRef("");

  const handleChange = (e) => {
    inputRef.current = e.target.value; // value store hogi but UI re-render nahi hoga
  };

  return (
    <div>
      <h2>Avoid Re-renders using useRef</h2>

      <p>Component Rendered: {renderCount.current} times</p>

      <button onClick={() => setCount(count + 1)}>
        Increment Count (causes re-render)
      </button>

      <h3>Count: {count}</h3>

      <hr />

      <input
        type="text"
        placeholder="Type here..."
        onChange={handleChange}
      />

      <p>
        Current input value (stored in ref): <b>{inputRef.current}</b>
      </p>
    </div>
  );
};

export default Task4;
