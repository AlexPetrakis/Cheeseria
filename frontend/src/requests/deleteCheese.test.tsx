import axios from "axios";

import deleteCheese from "./deleteCheese";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Test Delete Request", () => {
  it("Should call axios delete with the correct URL", async () => {
    mockedAxios.delete.mockResolvedValueOnce({});

    await deleteCheese("1");
    expect(mockedAxios.delete).toHaveBeenCalled();
    expect(mockedAxios.delete).toHaveBeenCalledWith(
      `${process.env.REACT_APP_API_ENDPOINT}/cheeses/1`
    );
  });
});
