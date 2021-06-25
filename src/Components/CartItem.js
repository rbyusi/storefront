const CartItem = ({ Item, Products, onAddItem, onRemoveItem }) => {
  const item = Products.find((item) => item.id === Item.id);

  return (
    <div className="ShoppingCartItem">
      <span className="ItemImage">
        <img alt={item.title} src={item.image}></img>
        <div>
          <h2>{item.brand}</h2>
          <h2>{item.title}</h2>
        </div>
      </span>
      <div className="QuantityContainer">
        <div className="QuantityCount"><span data-testid="CartItemTotal">{Item.quantity}</span></div>
        <div className="QuantityButtons">
          <button onClick={() => onAddItem(item)}>+</button>
          <button
            onClick={() => onRemoveItem(item, false)}
            disabled={Item.quantity < 2}
          >
            -
          </button>
        </div>
      </div>
      <span>${(Item.quantity * item.price).toFixed(2)}</span>
      <span>
        <button onClick={() => onRemoveItem(item, true)}>x</button>
      </span>
    </div>
  );
};

export default CartItem;
