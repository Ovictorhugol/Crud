import React from "react";
import "./Card.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Card({ value, key }) {
  const [newFoodName, setNewFoodName] = useState("");
  const Delete = () => {};
  const Update = (id) => {
    axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName,
    });
  };
  return (
    <div className="Card">
      <p>{value.foodName}</p>
      <p>{value.daysSinceIAte}</p>
      <div className="Update">
        <input
          type="text"
          placeholder="Update Food Name"
          onChange={(e) => {
            setNewFoodName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            Update(value._id);
          }}
        >
          Update
        </button>
      </div>
      <button onClick={Delete}>Delete</button>
    </div>
  );
}

export default Card;
