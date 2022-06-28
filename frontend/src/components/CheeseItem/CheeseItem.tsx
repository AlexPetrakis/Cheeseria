import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Cheese } from "../../types";
import { convertCentsToDollarString } from "../../utils";
import CheeseItemInfo from "./CheeseItemInfo";
import CheesePriceCalculator from "./CheesePriceCalculator";

type Props = {
  cheese: Cheese;
};

// Update to be mobile friendly (Update the height/width based on screen)
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 380px;
  background-color: ${(props) => props.theme.colors.transparentWhite};
  padding: 5px;
  border-radius: 10px;
  row-gap: 10px;
`;

const CheeseHeaderText = styled.span`
  font-size: 22px;
  font-family: ${(props) => props.theme.fonts};
  text-align: center;
`;

const StyledImage = styled.img`
  border-radius: 15px;
`;

const StyledButton = styled.button`
  width: 50%;
`;

const CheeseItem = ({ cheese }: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <CheeseHeaderText>{cheese.name}</CheeseHeaderText>
      <StyledImage
        src={cheese.image}
        alt={cheese.name}
        height="180px"
        width="100%"
      />
      <CheeseItemInfo property="Colour" value={cheese.colour} />
      <CheeseItemInfo
        property="Price Per KG"
        value={convertCentsToDollarString(cheese.price)}
      />
      <CheesePriceCalculator price={cheese.price} />
      <StyledButton
        type="button"
        onClick={() => navigate(`/cheese/${cheese.id}`)}
      >
        Edit
      </StyledButton>
    </Wrapper>
  );
};

export default CheeseItem;
