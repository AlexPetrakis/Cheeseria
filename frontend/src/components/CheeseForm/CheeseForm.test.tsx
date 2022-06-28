import { createCheese } from "../../requests";
import { act, fireEvent, render, screen } from "../../utils/test-utils";
import CheeseForm from "./CheeseForm";

jest.mock("../../requests/createCheese.ts", () => jest.fn());

describe("CheeseForm", () => {
  it("Should render form fields", () => {
    render(<CheeseForm />);

    expect(
      screen.getByRole("heading", { name: "Create Cheese" })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/colour/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/image/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/price/i)).toBeInTheDocument();
  });

  it("Should not be able to submit with invalid data", async () => {
    render(<CheeseForm />);
    fireEvent.input(screen.getByPlaceholderText(/name/i), {
      target: {
        value: "a",
      },
    });
    await act(async () => {
      fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
    });
    expect(createCheese).not.toBeCalled();
  });

  it("Should be able to create a cheese item with valid data", async () => {
    render(<CheeseForm />);
    fireEvent.input(screen.getByPlaceholderText(/name/i), {
      target: {
        value: "Cheddar",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/colour/i), {
      target: {
        value: "colour",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/image/i), {
      target: {
        value: "image",
      },
    });
    fireEvent.input(screen.getByPlaceholderText(/price/i), {
      target: {
        value: 1.5,
      },
    });

    await act(async () => {
      fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
    });
    expect(createCheese).toBeCalled();
  });

  it("Should be able to create a cheese item with valid data", async () => {
    render(<CheeseForm />);
    fireEvent.input(screen.getByPlaceholderText(/name/i), {
      target: {
        value: "Cheddar",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/colour/i), {
      target: {
        value: "colour",
      },
    });

    fireEvent.input(screen.getByPlaceholderText(/image/i), {
      target: {
        value: "image",
      },
    });
    fireEvent.input(screen.getByPlaceholderText(/price/i), {
      target: {
        value: 1.5,
      },
    });

    await act(async () => {
      fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
    });
    expect(createCheese).toBeCalled();
  });
});
