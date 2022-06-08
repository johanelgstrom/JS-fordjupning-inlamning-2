import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import { Button } from "../StyledComponents/Button";
import { StyledImage } from "../StyledComponents/Image";
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
  let paramsNum = parseInt(params.id!);

  const [animal, setAnimal] = useState<IAnimal>();
  let hungryStatus = "";
  if (animal?.isFed === true) {
    hungryStatus = "Mätt";
  } else {
    hungryStatus = "Hungrig";
  }

  const feedHandler = () => {
    props.animalList.forEach((animal) => {
      let idString = animal.id.toString();
      if (idString === params.id) {
        // animal.isFed = true;
        // animal.lastFed = new Date().toISOString();
        props.animalIsFed(animal.id);
        console.log("nomnom");
        console.log(animal.isFed);
      }
    });
  };

  useEffect(() => {
    props.animalList.forEach((animal) => {
      let idString = animal.id.toString();
      if (idString === params.id) {
        setAnimal(animal);
      }
    });
  }, []);
  return (
    <>
      <StyledSingleAnimalWrapper>
        <h3>{animal?.name}</h3>
        <StyledImageWrapper>
          <StyledImage src={animal?.imageUrl} alt={animal?.name} />
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
          <Button>Mätt och belåten</Button>
        ) : (
          <Button onClick={feedHandler}>Mata</Button>
        )}
      </StyledSingleAnimalWrapper>
    </>
  );
};
