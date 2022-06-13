import { IAnimal } from "../../models/IAnimal";
import { Animal } from "../Animal";

interface IHomeProps {
  animalList: IAnimal[];
}

export const Home = (props: IHomeProps) => {
  return (
    <>
      {props.animalList.map((animal) => {
        return (
          <Animal
            name={animal.name}
            shortDescription={animal.shortDescription}
            imageUrl={animal.imageUrl}
            isFed={animal.isFed}
            id={animal.id}
            key={animal.id}
          ></Animal>
        );
      })}
    </>
  );
};
