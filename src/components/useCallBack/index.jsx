import { useState, useCallback } from "react";

const CallbackComponent = () => {
  const [count, setCount] = useState(0);

  const handleClickWithoutCallback = () => {
    console.log("Button clicked!");
  };

  const handleClickWithCallback = useCallback(() => {
    console.log("Button clicked with useCallback!");
  }, [count]);

  return (
    <div style={{ paddingTop: "20px" }}>
      <h1>Callback Component</h1>
      <p>Count: {count}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={handleClickWithoutCallback}>click useCallback</button>
        <button onClick={handleClickWithCallback}>click useCallback</button>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    </div>
  );
};

export default CallbackComponent;
