import { render, screen } from "../../utils/test-utils";
import CheeseItemInfo from "./CheeseItemInfo";

describe("CheeseItemInfo", () => {
  it("Displays the cheese property and value", () => {
    render(<CheeseItemInfo property="colour" value="red" />);
    const cheeseProperty = screen.getByText("colour", { exact: false });
    const cheeseValue = screen.getByText("red", { exact: false });

    expect(cheeseProperty).toBeInTheDocument();
    expect(cheeseValue).toBeInTheDocument();
  });
});
