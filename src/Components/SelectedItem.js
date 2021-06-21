const SelectedItem = ({ ViewItem, CartItems}) => {
    const cartItem = CartItems.find((item)=> item.id === ViewItem.id)
    console.log({...cartItem})
  return (
    <>
      <div>
        <img id="ViewImage" src={ViewItem.image} alt={ViewItem.title}></img>
      </div>

      <div>
        <h2>{ViewItem.brand}</h2>
        <h1>{ViewItem.title}</h1><br></br>
        <p>${(ViewItem.price).toFixed(2)}</p><br></br>
        <span><h2>{ViewItem.description}</h2></span>
        <hr></hr>
        <div id="Quantity">
            <span id="Count">{cartItem ? cartItem.quantity : 0}</span>
            <button>+</button><br></br>
            <button>-</button>
        </div>
      </div>
    </>
  );
};

export default SelectedItem;
