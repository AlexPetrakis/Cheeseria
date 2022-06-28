import styled from "styled-components";

import { ErrorAlert, LoadingIndicator } from "../components";
import { CheeseItem } from "../components/CheeseItem";
import { useGetCheeses } from "../hooks";

const ItemWrapper = styled.div`
  padding: 10px 0 0 25px;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow-x: auto;
  row-gap: 20px;
  column-gap: 5%;
`;

const Home = () => {
  const { cheeses, loading, hasError } = useGetCheeses();

  if (loading) {
    return <LoadingIndicator loading />;
  }

  if (hasError) {
    return <ErrorAlert />;
  }
  return (
    <div>
      <ItemWrapper>
        {cheeses.map((cheese) => (
          <CheeseItem cheese={cheese} key={cheese.id} />
        ))}
      </ItemWrapper>
    </div>
  );
};

export default Home;
