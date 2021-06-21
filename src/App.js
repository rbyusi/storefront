import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import MediaBanner from "./Components/MediaBanner";
import Items from "./Components/Items";

function App() {
  const [Products, setProducts] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [isItemSelected, setItemSelected] = useState(false)
  const [ViewItem, setViewItem] = useState()

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  };

  const onViewItem = (id) => {
    const item = Products.find((item) => id === item.id);
    setItemSelected(v => true)
    setViewItem(item)
  };
  const onAddItem = (product) => {
    const itemExists = CartItems.find((item) => item.id === product.id);
    if (itemExists) {
      setCartItems(
        CartItems.map((item) =>
          item.id === product.id
            ? { ...itemExists, quantity: itemExists.quantity }
            : item
        )
      );
    } else {
      setCartItems([...CartItems, { id: product.id, quantity: 1 }]);
    }
  };

  const onRemoveItem = (product) => {
    const itemExists = CartItems.find((item) => item.id === product.id);
    if (itemExists) {
      setCartItems(CartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        CartItems.map((item) =>
          item.id === product.id
            ? { ...itemExists, quantity: itemExists.quantity - 1 }
            : item
        )
      );
    }
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
      <Header
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
        CartItems={CartItems}
      />
      <MediaBanner isItemSelected={isItemSelected} ViewItem={ViewItem}/>
      <Items
        Products={Products}
        CartItems={CartItems}
        onAddItem={onAddItem}
        onViewItem={onViewItem}
        isItemSelected={isItemSelected}
        ViewItem={ViewItem}
      />
    </div>
  );
}

export default App;
