import React, {useEffect, useState} from "react";
import axios from "axios"

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [brewery, setBreweries] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${query}`
      );
      setPost(results.data);
      console.log(results.data);
    };

    fetchData()
  }, []);



  console.log("component rendered")
  return (
    <div>
      <h1>TestComponent</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(state => state+1)}>Increment</button>
      <button onClick={() => setDarkMode(state => !state)}>Toggle Dark Mode</button>
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text"/>
    </div>
  );
};

export default TestComponent;

// https://www.youtube.com/watch?v=vXu5FSdq90s
// 40:13