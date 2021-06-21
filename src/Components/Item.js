const Item = ({ product, onAddItem, onViewItem }) => {
  return (
    //image,brand,title,price
    <div className="Item">
      <div className="ImageContainer">
        <img src={product.image} alt={product.title}></img>
        <div className="Overlay">
          <div>
            <button onClick={()=>onViewItem(product.id)}>View Details</button>
          </div>
          <div>
            <button onClick={()=>onAddItem(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
      <h4>{product.brand}</h4>
      <h4>{product.title}</h4>
      <h4>$ {product.price}</h4>
    </div>
  );
};

export default Item;
