import "./App.css";
import axios from "axios";
import Card from "./Card.js";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    axios.get("http://localhost:3001/read").then((response) => {
      setFoodList(response.data);
    });
  }, []);
  const [foodList, setFoodList] = useState([]);
  const [foodName, setFoodName] = useState("");
  const [days, setDays] = useState(0);

  const addToList = () => {
    axios.post("http://localhost:3001/insert", {
      foodName: foodName,
      days: days,
    });
  };
  return (
    <div className="App">
      <h1>Crud</h1>
      <label>Food Name:</label>
      <input type="text" onChange={(e) => setFoodName(e.target.value)} />

      <label>Days since you ate it:</label>
      <input type="number" onChange={(e) => setDays(e.target.value)} />
      <button onClick={addToList}>Add to List</button>
      <>
        {foodList.map((value, key) => {
          return <Card value={value} key={key} />;
        })}
      </>
    </div>
  );
}

export default App;
