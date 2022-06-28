import axios from "axios";

import { Cheese } from "../types";

const getCheeses = async (id?: string): Promise<Cheese[]> => {
  // Error's handled in calling function
  let endpoint = `${process.env.REACT_APP_API_ENDPOINT}/cheeses`;
  if (id) {
    endpoint += `/${id}`;
  }
  const { data } = await axios.get<Array<Cheese>>(endpoint);
  return data;
};

export default getCheeses;
