import { Link, Outlet } from "react-router-dom";
import { StyledHeader } from "./StyledComponents/Header";
import { StyledHeading } from "./StyledComponents/Heading";
import { StyledLink } from "./StyledComponents/Link";
import { StyledMain } from "./StyledComponents/Main";
import { StyledMainWrapper } from "./StyledComponents/Wrappers";

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeading>
          <StyledLink to={"/"}>Johan's Zoo</StyledLink>
        </StyledHeading>
      </StyledHeader>
      <StyledMainWrapper>
        <StyledMain>
          <Outlet></Outlet>
        </StyledMain>
      </StyledMainWrapper>
    </>
  );
};
