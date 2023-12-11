import { useState, useMemo } from "react";

const ExpCalcComponent = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = (input) => {
    console.log("Expensive calculation happened");
    let result = input * 2;
    for (let i = 0; i < 88888888; i++) {
      result += Math.random();
    }
    return result;
  };

  const memoizedRes = useMemo(() => expensiveCalculation(count), [count]);

  return (
    <div>
      <h1>Calculation</h1>
      <p>Count: {count}</p>
      <p>Result: {memoizedRes}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default ExpCalcComponent;
