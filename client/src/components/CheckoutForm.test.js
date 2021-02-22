import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("app runs", () => {
    render(<CheckoutForm />);
})


test("form header renders", () => {
// Arrange: Render Checkout Form component
    render(<CheckoutForm />)
// Act : get our header DOM
    const header = screen.getByText("Checkout Form")
    console.log(header);
// Assert
});

// test("form shows success message on submit with form details", () => {});
