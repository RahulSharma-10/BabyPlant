import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Flow from "../components/Flow";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";
import ReactDOM from "react-dom";
import axios from "axios";

export default function Home() {

  let [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/read")
  //     .then(response => setProducts(response.data));
  // }, []);
  return (
    <div>
      <Navbar />
      <Flow />
      <Benefits />
      <Footer />
    </div>
  );
}