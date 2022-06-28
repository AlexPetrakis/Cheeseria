import { render, screen } from "../../utils/test-utils";
import ErrorAlert from "./ErrorAlert";

describe("ErrorAlert", () => {
  it("Should show error text", () => {
    render(<ErrorAlert />);
    const errorText = screen.getByText(/Sorry, we ran into an error./i);
    expect(errorText).toBeInTheDocument();
  });
});
