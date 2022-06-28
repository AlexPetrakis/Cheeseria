import axios from "axios";

import { BaseCheeseItem, Cheese } from "../types";

const createCheese = async (item: BaseCheeseItem): Promise<Cheese> => {
  // Error's handled in calling function
  const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/cheeses`;
  const { data } = await axios.post<Cheese>(endpoint, item);
  return data;
};

export default createCheese;
