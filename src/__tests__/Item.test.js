import { cleanup, render, screen } from "@testing-library/react";
import Item from "../Components/Item";
import { useState } from "react";

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

test("Successfully renders ShoppingItems", () => {
  render(<Item product={product} />);
  const image = screen.getByAltText(/Blue Stripe Stoneware Plate/);
  const AddToCartButton = screen.getByText(/Add to Cart/);
  const ViewDetailsButton = screen.getByText(/View Details/);
  expect(image).toBeInTheDocument();
  expect(AddToCartButton).toBeInTheDocument();
  expect(ViewDetailsButton).toBeInTheDocument();
});
