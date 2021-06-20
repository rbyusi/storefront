const Header = () => {
  return (
    <div className="Header">
      <span>
        <img src="/Images/logo.png" alt="Hero" />
      </span>
      <span className="Links">
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Journal</li>
          <li>More</li>
        </ul>
      </span>
      <span id="Cart">My Cart (0)</span>
    </div>
  );
};

export default Header;
