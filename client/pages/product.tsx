import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import ReactDOM from "react-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductOverview from "./ProductOverview";


export default function Home() {

  let [products, setProducts] = useState([]);

  return (
    <div>
    <Navbar />
    {/* <Router>
      <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/ProductOverview" element={<ProductOverview/>}></Route>
      </Routes>
    </Router> */}
    <ProductList/>
    </div>  
  );
}