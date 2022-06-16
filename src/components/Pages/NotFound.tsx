import { StyledHeading } from "../StyledComponents/Heading";
import { StyledNotFoundWrapper } from "../StyledComponents/Wrappers";

export const NotFound = () => {
  return (
    <>
      <StyledNotFoundWrapper>
        <StyledHeading>Sidan hittades ej</StyledHeading>
        <p>Dubbelkolla din URL och försök igen</p>
      </StyledNotFoundWrapper>
    </>
  );
};
