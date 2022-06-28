import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  price: number;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 50px;
  margin-left: 5px;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledSubmitButton = styled.button`
  margin-left: 15px;
`;

const CheesePriceCalculator = ({ price }: Props) => {
  const [cheeseWeight, setCheeseWeight] = useState("");
  const [cheesePrice, setCheesePrice] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const total = (parseFloat(cheeseWeight) * (price / 100)).toFixed(2);
    setCheesePrice(`$${total}`);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <StyledLabel htmlFor="cheeseWeight">
          Enter cheese weight in KG:
          <StyledInput
            type="text"
            pattern="(?<=^| )\d+(\.\d+)?(?=$| )|(?<=^| )\.\d+(?=$| )" // Only allow numbers and decimals
            name="cheeseWeight"
            id="cheeseWeight"
            maxLength={5}
            aria-label="cheeseWeight"
            value={cheeseWeight}
            onChange={(e) =>
              e.target.value
                ? setCheeseWeight(e.target.value)
                : setCheeseWeight("")
            }
          />
        </StyledLabel>
        <StyledSubmitButton disabled={cheeseWeight === ""} type="submit">
          Calculate Price
        </StyledSubmitButton>
      </form>
      <div>
        <StyledLabel>Total: {cheesePrice}</StyledLabel>
      </div>
    </Wrapper>
  );
};

export default CheesePriceCalculator;
