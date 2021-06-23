import CartItem from "./CartItem";
import CartOverview from "./CartOverview";
import CheckOut from "./CheckOut";
const Cart = ({ CartItems, Products, onAddItem, onRemoveItem, backToItems,isCartSelected }) => {
  return (
    <div className={isCartSelected ? "Cart" : "CartSelected"}>
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
            {CartItems.length > 0 ? (
              CartItems.map((item) => (
                <CartItem
                  key={item.id}
                  Item={item}
                  Products={Products}
                  onAddItem={onAddItem}
                  onRemoveItem={onRemoveItem}
                />
              ))
            ) : (
              <div className="NoCartItem"></div>
            )}
          </div>
          <div className="CartOverView">
            {CartItems.length > 0 && (
              <CartOverview CartItems={CartItems} Products={Products} />
            )}
          </div>
          <div className="CheckOut">
            <CheckOut Products={Products} CartItems={CartItems} backToItems={backToItems} isCartSelected={isCartSelected} />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Cart;
