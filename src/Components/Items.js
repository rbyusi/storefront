import Item from "./Item";
const Items = ({ Products }) => {
  return (
    <div id="Items">
      {Products.map((item, index) => (
        <Item key={index} Item={item} />
      ))}
    </div>
  );
};
export default Items;
