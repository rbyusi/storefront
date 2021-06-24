import { cleanup, render, screen } from "@testing-library/react";
import Header from "../Components/Header";

const CartItems = [
  {id: 4, quantity: 3},
  {id: 2, quantity: 1},
  {id: 3, quantity: 2},
  {id: 6, quantity: 1}]

beforeEach(()=>{
render(<Header CartItems={CartItems} />);
})

afterEach(()=>{
  cleanup();
})

test('Header succesfully renders',()=>{
  const logo = screen.getByAltText(/Hero/)
  const myCart = screen.getByTestId("MyCart")
  expect(myCart).toBeInTheDocument();
  expect(logo).toBeInTheDocument();
})


test('My Cart displays the right total of item quantities', ()=>{
  const myCart = screen.getByTestId("MyCart").textContent
  expect(myCart).toBe("My Cart (7)")

})