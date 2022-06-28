import convertCentsToDollarString from "./convertCentsToDollarString";

describe("convertCentsToDollarString", () => {
  test("Performs conversion correctly", () => {
    expect(convertCentsToDollarString(100)).toEqual("$1.00");
  });
});
