import CartItem from "./CartItem";
const Cart = ({CartItems, Products, onAddItem, onRemoveItem}) => {
  return (
    <div className="Cart">
      <h1>Shopping Cart</h1>
      <div className="CartItems">
        <div className="Headers">
          <div className="Product">Product</div>
          <div className="Quantity">Quantity</div>
          <div className="Total">Total</div>
          <div className="Action">Action</div>
        </div>
        <div>
          <div className="ShoppingCartItems">
            {(CartItems.length > 0 ? CartItems.map((item)=><CartItem  key={item.id} Item={item} Products={Products} onAddItem={onAddItem} onRemoveItem={onRemoveItem}/>) : <div className="NoCartItem">You currently have no Cart Items</div>)}
          </div>
          <div className="CartOverView">
          {(CartItems.lenght > 0 && <h2>Overview here</h2>)}
            
          </div>
          <div className="CheckOut">
            <span>Continue Shopping</span>
            {(CartItems.length > 0 && <button>Checkout</button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
