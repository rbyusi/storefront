const CartOverview = ({ CartItems, Products }) => {
  const total = CartItems.map((item) => {
    return {
      id: item.id,
      total: item.quantity * Products.find((e) => e.id === item.id).price,
    };
  });

  const t = total.reduce((a, v) => a + v.total, 0);

  return (
    <>
    
      <div>
      <h2>Cart Overview</h2><br></br>
        <h2>SUBTOTAL</h2>
        <h2>TOTAL</h2>
      </div>
      <div>
        <br></br>
        <span><h2>{`$${t.toFixed(2)}`}</h2></span>
        <span><h2>{`$${t.toFixed(2)} AUD`}</h2></span>
      </div>
    </>
  );
};

export default CartOverview;
