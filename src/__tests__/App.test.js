import { cleanup, render, screen } from "@testing-library/react";
import App from "../App";

beforeEach(()=>{
  render(<App />);
})

afterEach(()=>{
  cleanup();
})

test("Successfuly enders the navbar", () => {

  const myCart = screen.getByText("My Cart (0)");
  expect(myCart).toBeInTheDocument();
});

test("Successfuly renders the mediabanner", () => {

  const mediabanner = screen.getByText("Plates")
  expect(mediabanner).toBeInTheDocument();
});
