import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default function Home() {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/read")
      .then(response => setProducts(response.data));
  }, []);

  return (
    <div>
      <h2>Data from Db</h2>
      <code>{JSON.stringify(products)}</code>
    </div>
  );
}