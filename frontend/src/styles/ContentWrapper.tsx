import styled from "styled-components";

// Re-usable content layout to maintain consistency across pages
const ContentWrapper = styled.div`
  margin: 2% 5% 1% 5%;
  padding: 25px;
  height: 75vh;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.transparentWhite};
`;

export default ContentWrapper;
