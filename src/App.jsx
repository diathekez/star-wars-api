import React, {useState} from "react";
import TestComponent from "./TestComponent";

const App = () => {
  const [showComponent, setShowComponent] = useState(true)
  return (
    <div>
      {showComponent && <TestComponent/>}
      <button onClick={() => setShowComponent(state=>!state)}>Show Test Component</button>
    </div>
  );
};

export default App;