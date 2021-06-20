import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import MediaBanner from "./Components/MediaBanner";
import Items from "./Components/Items"

function App() {
  const [Products, setProducts] = useState([]);
  const [CartItems, setCartItems] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getProducts = async () => {
      const ProductsFromServer = await fetchProducts();
      setProducts(ProductsFromServer);
    };
    getProducts();
  }, []);

  return (
    <div id="Container">
      <Header />
      <MediaBanner />
      <Items Products = {Products}/>
    </div>
  );
}

export default App;
