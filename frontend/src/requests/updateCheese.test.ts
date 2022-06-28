import axios from "axios";

import updateCheese from "./updateCheese";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Test Patch Request", () => {
  it("Should call axios patch with the correct URL and body", async () => {
    const item = {
      id: "50",
      name: "Test",
      price: 1.5,
      colour: "red",
      image: "test",
    };
    mockedAxios.patch.mockResolvedValue({ data: item });

    const result = await updateCheese("1", item);
    expect(mockedAxios.patch).toHaveBeenCalled();
    expect(mockedAxios.patch).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_ENDPOINT}/cheeses/1`,
      item
    );
    expect(result).toEqual(item);
  });
});
