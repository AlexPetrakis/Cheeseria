import styled from "styled-components";

const CheeseInfoWrapper = styled.div``;

const CheeseInfoProperty = styled.span`
  font-weight: bold;
`;

const CheeseInfoValue = styled.span``;

type Props = {
  property: string;
  value: string | number;
};

const CheeseItemInfo = ({ property, value }: Props) => (
  <CheeseInfoWrapper>
    <CheeseInfoProperty>{property}: </CheeseInfoProperty>
    <CheeseInfoValue>{value}</CheeseInfoValue>
  </CheeseInfoWrapper>
);

export default CheeseItemInfo;
