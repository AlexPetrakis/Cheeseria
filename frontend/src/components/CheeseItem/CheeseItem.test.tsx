import { Cheese } from "../../types";
import { render, screen } from "../../utils/test-utils";
import CheeseItem from "./CheeseItem";

const cheese: Cheese = {
  id: "1",
  name: "Adelost",
  colour: "Golden Orange",
  image: "https://cheese.com/media/img/cheese/Adelost_QnxYLx6.jpg",
  price: 164,
};

describe("CheeseItem", () => {
  it("Displays the cheese name", () => {
    render(<CheeseItem cheese={cheese} />);
    const cheeseName = screen.getByText(cheese.name, { exact: false });
    expect(cheeseName).toBeInTheDocument();
  });

  it("Displays cheese image", () => {
    render(<CheeseItem cheese={cheese} />);
    const image = screen.getByAltText(cheese.name, { exact: false });
    expect(image).toBeInTheDocument();
  });
});
