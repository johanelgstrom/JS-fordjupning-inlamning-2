import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Pages/Home";
import { SinglePageAnimal } from "./components/Pages/SinglePageAnimal";
import { IAnimal } from "./models/IAnimal";

function App() {
  const [animalList, setAnimalList] = useState<IAnimal[]>([]);

  const animalIsFed = (id: number) => {
    let tempList = [...animalList];
    tempList[id - 1].isFed = true;
    tempList[id - 1].lastFed = new Date().toISOString();
    setAnimalList(tempList);
  };

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("animalList", JSON.stringify(animalList));
    }, 100);
  }, [animalList]);

  useEffect(() => {
    let getList: string = localStorage.getItem("animalList") || "";
    if (getList === "") {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          response.data[1].imageUrl = "https://via.placeholder.com/1337";

          localStorage.setItem("animalList", JSON.stringify(response.data));
          setAnimalList(response.data);
        });
    } else {
      let gotList: IAnimal[] = JSON.parse(getList);
      setAnimalList(gotList);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home animalList={animalList} />}></Route>
            <Route
              path="/:id"
              element={
                <SinglePageAnimal
                  animalList={animalList}
                  animalIsFed={animalIsFed}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
