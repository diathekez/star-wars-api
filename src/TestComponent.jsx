import React, {useEffect, useState} from "react";

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.title = `${count}`
    console.log("useEffect hook ran");
  }, [count]);

  console.log("component rendered")
  return (
    <div>
      <h1>TestComponent</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(state => state+1)}>Increment</button>
      <button onClick={() => setDarkMode(state => !state)}>Toggle Dark Mode</button>
    </div>
  );
};

export default TestComponent;