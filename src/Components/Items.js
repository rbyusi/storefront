import Item from "./Item";
import SelectedItem from "./SelectedItem";
const Items = ({
  Products,
  CartItems,
  onAddItem,
  onViewItem,
  isItemSelected,
  ViewItem,
  isCartSelected
}) => {
  return (
    <div id={isCartSelected ? "CartSelected" : isItemSelected ? "ViewItem" : "Items"}>
      {isItemSelected ? (
        <SelectedItem
          ViewItem={ViewItem}
          CartItems={CartItems}
          onAddItem={onAddItem}
        />
      ) : (
        Products.map((product) => (
          <Item
            key={product.id}
            product={product}
            onAddItem={onAddItem}
            onViewItem={onViewItem}
            CartItems={CartItems}
          />
        ))
      )}
    </div>
  );
};
export default Items;
