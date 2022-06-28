import { useEffect, useState } from "react";

import { getCheese } from "../requests";
import { Cheese } from "../types";

const useGetCheese = (id?: string) => {
  const [cheese, setCheese] = useState<Cheese>();
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          setLoading(true);
          const data = await getCheese(id);

          setCheese(data);
        } catch (error) {
          setHasError(true);
        } finally {
          setLoading(false);
        }
      })();
    }
  }, [id]);
  return { cheese, loading, hasError };
};

export default useGetCheese;
