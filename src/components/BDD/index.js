import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("/api/items")
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h3>Items</h3>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h3>{item.id}</h3>
            <p>{item.email}</p>
            <p>{item.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;