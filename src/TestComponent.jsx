import React, {useEffect, useState} from "react";
import axios from "axios"

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [breweries, setBreweries] = useState([]);
  const [search, setSearch] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      // const results = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${search}`
      // const results = await axios.get(`https://swapi.dev/api/people/?search=${search}`
      const results = await axios.get(`https://poetrydb.org/random`
      );
      setBreweries(results.data);
      console.log(results.data);
    };

    fetchData();
  }, [search]);



  console.log("component rendered")
  return (
    <div>
      <h1>TestComponent</h1>
      <h2>{count}</h2>
      <h3>{}</h3>
      <button onClick={() => setCount(state => state+1)}>Increment</button>
      <button onClick={() => setDarkMode(state => !state)}>Toggle Dark Mode</button>
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text"/>
      {breweries.map((brewery) => {
        return <h2>{brewery.lines}</h2>;
      }
      )}
    </div>
  );
};

export default TestComponent;