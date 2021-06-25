import { cleanup, render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer'

import App from "../App";

beforeEach(()=>{
  render(<App />);
})

afterEach(()=>{
  cleanup();
})

test("Renders the whole /app component properly",()=>{
    const app = renderer.create(<App />)
    let tree = app.toJSON();
    expect(tree).toMatchSnapshot();
})

test("Successfuly enders the navbar", () => {

  const myCart = screen.getByText("My Cart (0)");
  expect(myCart).toBeInTheDocument();
});

test("Successfuly renders the mediabanner", () => {

  const mediabanner = screen.getByText("Plates")
  expect(mediabanner).toBeInTheDocument();
});
