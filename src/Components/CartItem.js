const CartItem = ({ Item, Products, onAddItem, onRemoveItem}) => {
  const item = Products.find((item) => item.id === Item.id);
  return (
    <>
      <div>
        <img alt={item.title} src={item.image}></img>
        <p>{item.brand}</p>
        <p>{item.title}</p>
      </div>
      <span>{Item.quantity}</span>
      <span><button onClick={()=>onAddItem(item)}>+</button><br></br><button onClick={()=>onRemoveItem(item,false)} disabled={Item.quantity < 2}>-</button></span>
      <span><button onClick={()=>onRemoveItem(item,true)}>x</button></span>
    </>
  );
};

export default CartItem;
{
}
