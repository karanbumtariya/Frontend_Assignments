import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

const Task3 = () => {
  const count = useSelector((state) => state.counter.value); // state read
  const dispatch = useDispatch(); // action bhejne ke liye

  return (
    <div>
      <h2>Redux Counter</h2>
      <h3>Count: {count}</h3>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Task3;
