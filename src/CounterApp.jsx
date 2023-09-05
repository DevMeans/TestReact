import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    /* setCounter(counter+1);*/
    setCounter((c) => c + 1);
  };
  const handledif = () => {
    /* setCounter(counter+1);*/
    setCounter((c) => c - 1);
  };
  const handleReset = () => {
    /* setCounter(counter+1);*/
    setCounter((c) => c =0);
  };

  return (
    <>
      <div>CounterApp</div>
      <h1>{counter}</h1>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handledif}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
CounterApp.defaultProps = {
  value: 0,
};
