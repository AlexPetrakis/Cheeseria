import axios from "axios";

import { Cheese } from "../types";

const deleteCheese = async (id: string): Promise<void> => {
  // Error's handled in calling function
  const endpoint = `${process.env.REACT_APP_API_ENDPOINT}/cheeses/${id}`;
  await axios.delete<Cheese>(endpoint);
};

export default deleteCheese;
