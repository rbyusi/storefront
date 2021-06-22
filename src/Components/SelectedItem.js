import { useState } from "react";
const SelectedItem = ({ ViewItem, CartItems, onAddItem }) => {
  const [quantity, setQuantity] = useState(1);
  console.log(quantity)
  return (
    <>
      <div>
        <img id="ViewImage" src={ViewItem.image} alt={ViewItem.title}></img>
      </div>

      <div>
        <h2>{ViewItem.brand}</h2>
        <h1>{ViewItem.title}</h1>
        <br></br>
        <p>${ViewItem.price.toFixed(2)}</p>
        <br></br>
        <span>
          <h2>{ViewItem.description}</h2>
        </span>
        <hr></hr>
        <div id="Quantity">
          <span id="Count">{quantity}</span>
          <button onClick={()=>setQuantity(quantity + 1)}>+</button>
          <br></br>
          <button onClick={()=>setQuantity(quantity > 1 ? quantity -1 : 1)}>-</button>
        </div>
        <button onClick={()=>onAddItem(ViewItem,quantity)}>Add to Cart</button>
      </div>
    </>
  );
};

export default SelectedItem;
