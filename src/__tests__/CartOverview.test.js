import { cleanup, render, screen } from "@testing-library/react";
import CartOverview from "../Components/CartOverview";


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
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
  ];


  beforeEach(() => {
    render(<CartOverview Products={Products} CartItems={CartItems}/>);
  });
  afterEach(() => {
    cleanup();
  });

  test("Cart Overview section successfully renders", ()=>{
      const cartOverViewLabel = screen.getByText(/Cart Overview/)
      const subtotalLabel = screen.getByText(/subtotal/i)
      const totalLabel = screen.getByText("TOTAL")
      expect(cartOverViewLabel).toBeInTheDocument()
      expect(subtotalLabel).toBeInTheDocument()
      expect(totalLabel).toBeInTheDocument()
  })

  //the compututations are based on the Product[x].price * CartItems[x].quantity
  test("Cart Overview computation is correct based on the Product/s price and CartItems quantity", ()=>{
      const subTotal = screen.getByText("$108.00")
      expect(subTotal).toBeInTheDocument();
  })