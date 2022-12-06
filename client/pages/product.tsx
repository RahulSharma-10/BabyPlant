import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import ReactDOM from "react-dom";
import axios from "axios";

export default function Home() {

  let [products, setProducts] = useState([]);

  return (
    <div>
    <Navbar />
    <ProductList />
    </div>  
  );
}