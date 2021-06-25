import { cleanup, render, screen } from "@testing-library/react";
import Item from "../Components/Item";

afterEach(() => {
  cleanup();
});

const product = {
  id: 1,
  title: "Blue Stripe Stoneware Plate",
  brand: "Kiriko",
  price: 40,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
  image: "/Images/blue-stripe-stoneware-plate.jpg",
};

const onAddItem = jest.fn()
const AddItem = () => {
  onAddItem.mockReturnValue(product)
  return (
    <div>
      <button onClick={() => onAddItem(product)}>Add to Cart</button>
    </div>
  );
 
};

test("Successfully renders ShoppingItems", () => {
  render(<Item product={product} />);
  const image = screen.getByAltText(/Blue Stripe Stoneware Plate/);
  const AddToCartButton = screen.getByText(/Add to Cart/);
  const ViewDetailsButton = screen.getByText(/View Details/);
  expect(image).toBeInTheDocument();
  expect(AddToCartButton).toBeInTheDocument();
  expect(ViewDetailsButton).toBeInTheDocument();
});


test("Add to Cart button's function is being called when clicked", ()=>{
  render(<AddItem />)
  const addButton = screen.getByText(/Add to Cart/)
  addButton.click();
  expect(onAddItem.mock.calls.length).toEqual(1);
});