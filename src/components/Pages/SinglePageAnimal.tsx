import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { Button, DangerButton } from "../StyledComponents/Button";
import { StyledSingleImage } from "../StyledComponents/Image";
import {
  StyledImageWrapper,
  StyledInfoWrapper,
  StyledShortInfoWrapper,
  StyledSingleAnimalWrapper,
} from "../StyledComponents/Wrappers";

interface ISinglePageAnimalProps {
  animalList: IAnimal[];
  animalIsFed(id: number): void;
}

export const SinglePageAnimal = (props: ISinglePageAnimalProps) => {
  let params = useParams();

  const [animal, setAnimal] = useState<IAnimal>();

  let hungryStatus: string = "";
  if (animal?.isFed === true) {
    hungryStatus = "Mätt";
  } else {
    hungryStatus = "Hungrig";
  }

  const feedHandler = () => {
    props.animalList.forEach((animal) => {
      let idString: string = animal.id.toString();
      if (idString === params.id) {
        props.animalIsFed(animal.id);
      }
    });
  };
  useEffect(() => {
    props.animalList.forEach((animal) => {
      let idString: string = animal.id.toString();
      if (idString === params.id) {
        setAnimal(animal);
      }
    });
  }, [params]);
  return (
    <>
      <StyledSingleAnimalWrapper>
        <h3>{animal?.name}</h3>
        <StyledImageWrapper>
          <StyledSingleImage src={animal?.imageUrl} alt={animal?.name} />
        </StyledImageWrapper>
        <StyledInfoWrapper>{animal?.longDescription}</StyledInfoWrapper>
        <StyledShortInfoWrapper>
          Födelseår: {animal?.yearOfBirth}
        </StyledShortInfoWrapper>
        <StyledShortInfoWrapper>
          Mediciner: {animal?.medicine}
        </StyledShortInfoWrapper>
        <StyledShortInfoWrapper>
          Matad senaste: {animal?.lastFed}
        </StyledShortInfoWrapper>
        <StyledShortInfoWrapper>Matad: {hungryStatus}</StyledShortInfoWrapper>
        {animal?.isFed ? (
          <DangerButton>Mätt och belåten</DangerButton>
        ) : (
          <Button onClick={feedHandler}>Mata</Button>
        )}
      </StyledSingleAnimalWrapper>
    </>
  );
};
