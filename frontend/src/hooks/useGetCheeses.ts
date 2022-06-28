import { useEffect, useState } from "react";

import { getCheeses } from "../requests";
import { Cheese } from "../types";

const useGetCheeses = (id?: string) => {
  const [cheeses, setCheeses] = useState<Array<Cheese>>([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getCheeses(id);

        setCheeses(data);
      } catch (error) {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  return { cheeses, loading, hasError };
};

export default useGetCheeses;
