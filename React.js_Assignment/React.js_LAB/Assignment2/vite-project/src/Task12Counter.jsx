import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Task12action";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Counter App</h2>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: "10px" }}>
        -
      </button>
    </div>
  );
};

export default Counter;
