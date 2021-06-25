import { cleanup, render, screen } from "@testing-library/react";
import CartItem from "../Components/CartItem";

afterEach(() => {
  cleanup();
});

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

const Item = { id: 1, quantity: 1 };


const QuantityCounter = () =>{
    let counter =2
    const onAddItem = jest.fn ()
    const onRemoveItem = jest.fn()
    return(
     <div className="QuantityButtons">
     <button onClick={() => onAddItem.mockReturnValue(counter ++)}>+</button>
     <button
       onClick={() => onRemoveItem}
       disabled={counter < 2}
     >
       -
     </button>
     <span>${(counter * Products[1].price).toFixed(2)}</span>
     </div>
    )
 }


//change the Products array index and/or Item object id to be able to play around the different products in the Products array
test("Cart item successfully renders in the shopping cart", () => {
    render(<CartItem Products={Products} Item={Item} />);
  const imgAlt = screen.getByText(Products[0].title)
  const brand = screen.getByText(Products[0].brand)
  const cartTotal = screen.getByText(`$${Products[0].price.toFixed(2)}`)
  expect(brand).toBeInTheDocument();
  expect(cartTotal).toBeInTheDocument();
  expect(imgAlt).toBeInTheDocument();
  
});

//Change the Quantity counter  to test if the minus button will disable when counter < 2
test("Check the quantity increment and decrement",()=>{
    render(<QuantityCounter/>)
    const minusButton = screen.getByText(/-/)
    expect(minusButton).toBeEnabled();
})
//Can also change the Products index to change the price to multiply with the quantity
test("Calculation of quantity multiplied by the item price is correct",()=>{
    render(<QuantityCounter/>)
    const total = screen.getByText("$56.00")
    expect(total).toBeInTheDocument();
})