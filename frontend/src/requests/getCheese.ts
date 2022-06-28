import axios from "axios";

import { Cheese } from "../types";

const getCheese = async (id: string): Promise<Cheese> => {
  // Error's handled in calling function
  const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/cheeses/${id}`;
  const { data } = await axios.get<Cheese>(endpoint);
  return data;
};

export default getCheese;
