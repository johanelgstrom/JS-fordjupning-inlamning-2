import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledImage } from "./StyledComponents/Image";
import { StyledLink } from "./StyledComponents/Link";
import {
  StyledCardWrapper,
  StyledImageWrapper,
  StyledInfoWrapper,
} from "./StyledComponents/Wrappers";

interface IAnimalProps {
  id: number;
  name: string;
  shortDescription: string;
  imageUrl: string;
  isFed: boolean;
}

export const Animal = (props: IAnimalProps) => {
  let hungryStatus = "";
  if (props.isFed === true) {
    hungryStatus = "Mätt";
  } else {
    hungryStatus = "Hungrig";
  }
  return (
    <>
      <StyledLink to={"/" + props.id}>
        <StyledCardWrapper>
          <h4>{props.name}</h4>
          <StyledImageWrapper>
            <StyledImage src={props.imageUrl} alt={props.name} />
          </StyledImageWrapper>
          <StyledInfoWrapper>
            <p>{props.shortDescription}</p>
          </StyledInfoWrapper>

          <p>{hungryStatus}</p>
        </StyledCardWrapper>
      </StyledLink>
    </>
  );
};
