const Header = ({CartItems, backToItems}) => {
  const itemNumber = CartItems.reduce((a,v) =>a = a + v.quantity ,0)
  return (
    <div className="Header">
      <span>
        <img src="/Images/logo.png" alt="Hero" />
      </span>
      <span className="Links">
        <ul>
          <li>Home</li>
          <li onClick={()=>backToItems()}>Shop</li>
          <li>Journal</li>
          <li>More</li>
        </ul>
      </span>
      <span id="Cart">{`My Cart (${itemNumber})`}</span>
    </div>
  );
};

export default Header;
