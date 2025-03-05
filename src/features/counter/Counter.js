import React from "react";
import { increment, decrement } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(count);
  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
};
export default Counter;
