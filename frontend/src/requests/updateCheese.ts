import axios from "axios";

import { BaseCheeseItem, Cheese } from "../types";

const updateCheese = async (
  id: string,
  item: BaseCheeseItem
): Promise<Cheese> => {
  // Error's handled in calling function
  const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/cheeses/${id}`;
  const { data } = await axios.patch<Cheese>(endpoint, item);
  return data;
};

export default updateCheese;
