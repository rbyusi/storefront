import Items from "./Items";

const Item = ({ Item }) => {
  return (
    //image,brand,title,price
    <div className="Item">
      <div className="ImageContainer">
        <img src={Item.image} alt={Items.title}></img>
        <div className="Overlay">
            <div><button>View Details</button></div>
            <div><button>Add to Cart</button></div>
        </div>
      </div>
      <h4>{Item.brand}</h4>
      <h4>{Item.title}</h4>
      <h4>$ {Item.price}</h4>
    </div>
  );
};

export default Item;
