const CheckOut = ({ Products, CartItems, backToItems, isCartSelected }) => {
  const total = CartItems.map((item) => {
    return {
      id: item.id,
      total: item.quantity * Products.find((e) => e.id === item.id).price,
    };
  });

  const t = total.reduce((a, v) => a + v.total, 0);

  return (
    <>
      <h2 onClick={()=>!isCartSelected && backToItems()}>Continue Shopping</h2>{" "}
      {CartItems.length > 0 ? <button className="Button">{`Checkout ($${t.toFixed(2)})`}</button> : <div></div> }
    </>
  );
};

export default CheckOut;
