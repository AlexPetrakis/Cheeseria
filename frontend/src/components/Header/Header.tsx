import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  padding-left: 75px;
  box-shadow: ${(props) => `0px 1px 1px ${props.theme.colors.lightGrey}`};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

// Hide this on mobile devices and just show the logo.
const StyledText = styled.span`
  padding-left: 15px;
  font-size: 32px;
  font-family: ${(props) => props.theme.fonts};
  @media (max-width: 500px) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.black};
  text-decoration: none;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts};
`;

const Header = () => (
  <Wrapper>
    <LogoWrapper>
      <img src="/cheeselogo.png" alt="Cheeseria logo" width={50} height={50} />
      <StyledText>Cheeseria</StyledText>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/cheese">Create Cheese</StyledLink>
      </StyledNav>
    </LogoWrapper>
  </Wrapper>
);

export default Header;
