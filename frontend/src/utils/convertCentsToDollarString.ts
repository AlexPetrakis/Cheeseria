/**
 * @description Returns a readable string dollar amount.
 * @param cents
 * @returns string
 */

const convertCentsToDollarString = (cents: number): string =>
  (cents / 100).toLocaleString("en-AU", { style: "currency", currency: "AUD" });

export default convertCentsToDollarString;
