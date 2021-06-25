import { cleanup, render, screen } from "@testing-library/react";
import CheckOut from "../Components/CheckOut";

const Products = [
  {
    id: 1,
    title: "Blue Stripe Stoneware Plate",
    brand: "Kiriko",
    price: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
    image: "/Images/blue-stripe-stoneware-plate.jpg",
  },
  {
    id: 2,
    title: "Hand Painted Blue Flat Dish",
    brand: "Kiriko",
    price: 28,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
    image: "/Images/hand-painted-blue-flat-dish.jpg",
  },
];

const CartItems = [
  { id: 1, quantity: 1 },
  { id: 2, quantity: 1 },
];

beforeEach(() => {
  render(<CheckOut Products={Products} CartItems={CartItems}/>);
});
afterEach(() => {
  cleanup();
});

test("Checkout button successfully renders", ()=>{
    const checkoutButton = screen.getByText("Checkout ($68.00)")
    expect(checkoutButton).toBeInTheDocument();
})
