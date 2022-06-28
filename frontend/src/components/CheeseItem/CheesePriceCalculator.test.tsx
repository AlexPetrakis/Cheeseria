import userEvent from "@testing-library/user-event";

import { render, screen } from "../../utils/test-utils";
import CheesePriceCalculator from "./CheesePriceCalculator";

describe("CheesePriceCalculator", () => {
  it("Should be able to enter a cheese weight", () => {
    render(<CheesePriceCalculator price={100} />);
    const cheeseWeight = screen.getByLabelText(/enter cheese weight/i);
    userEvent.type(cheeseWeight, "1.0");
    expect(cheeseWeight).toHaveValue("1.0");
  });

  it("Text Field should show a validation error if a non decimal/number is entered", () => {
    render(<CheesePriceCalculator price={100} />);
    const cheeseWeight = screen.getByLabelText(/enter cheese weight/i);

    userEvent.type(cheeseWeight, "aaaaa");
    expect(cheeseWeight).toBeInvalid();
  });

  it("Submit button should be disabled by default or the weight is empty", () => {
    render(<CheesePriceCalculator price={100} />);
    const calculatePriceButton = screen.getByRole("button", {
      name: /calculate price/i,
    });
    expect(calculatePriceButton).toBeDisabled();
  });

  it("Should be able to submit the form and display the correct total", () => {
    render(<CheesePriceCalculator price={164} />);
    const cheeseWeight = screen.getByLabelText(/enter cheese weight/i);
    userEvent.type(cheeseWeight, "1.0");
    const calculatePriceButton = screen.getByRole("button", {
      name: /calculate price/i,
    });
    userEvent.click(calculatePriceButton);

    const totalPrice = screen.getByText(/1.64/i);
    expect(totalPrice).toBeInTheDocument();
  });
});
