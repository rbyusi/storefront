import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import MediaBanner from "./Components/MediaBanner";
import Items from "./Components/Items";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";

function App() {
  const [Products, setProducts] = useState([]);
  const [CartItems, setCartItems] = useState([]);
  const [isItemSelected, setItemSelected] = useState(false);
  const [isCartSelected, setIsCartSelected] = useState(false);
  const [ViewItem, setViewItem] = useState();

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  };

  const onViewItem = (id) => {
    const item = Products.find((item) => id === item.id);
    setItemSelected((v) => true);
    setViewItem(item);
  };

  const backToItems = () => {
    console.log("here");
    setItemSelected((v) => false);
    toggleViewCart();
  };

  const toggleViewCart = () => setIsCartSelected(!isCartSelected);

  const onAddItem = (product, bulk = 0) => {
    const itemExists = CartItems.find((item) => item.id === product.id);
    const itemCount = bulk > 0 ? bulk : 1;
    if (itemExists) {
      setCartItems(
        CartItems.map((item) =>
          item.id === product.id
            ? { ...itemExists, quantity: itemExists.quantity + itemCount }
            : item
        )
      );
    } else {
      setCartItems([...CartItems, { id: product.id, quantity: itemCount }]);
    }
  };

  const onRemoveItem = (product, remove) => {
    const itemExists = CartItems.find((item) => item.id === product.id);
    const removeItem = remove ? "yes" : "no";
    console.log(removeItem);
    if (itemExists && removeItem === "no") {
      setCartItems(
        CartItems.map((item) =>
          item.id === product.id
            ? { ...itemExists, quantity: itemExists.quantity - 1 }
            : item
        )
      );
    } else if (removeItem === "yes") {
      console.log("here");
      setCartItems(CartItems.filter((item) => item.id !== product.id));
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
        backToItems={backToItems}
        toggleViewCart={toggleViewCart}
      />
      <MediaBanner isItemSelected={isItemSelected} ViewItem={ViewItem} isCartSelected={isCartSelected}/>
      <Items
        Products={Products}
        CartItems={CartItems}
        onAddItem={onAddItem}
        onViewItem={onViewItem}
        isItemSelected={isItemSelected}
        ViewItem={ViewItem}
        isCartSelected={isCartSelected}
      />
      <Cart
        Products={Products}
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
        CartItems={CartItems}
        backToItems={backToItems}
        isCartSelected={isCartSelected}
      />
    </div>
  );
}

export default App;
