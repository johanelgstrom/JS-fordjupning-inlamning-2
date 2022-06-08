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
    }, 1000);
  }, [animalList]);

  useEffect(() => {
    let getList: string = localStorage.getItem("animalList") || "";
    if (getList === "") {
      axios
        .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
        .then((response) => {
          localStorage.setItem("animalList", JSON.stringify(response.data));
          setAnimalList(response.data);
        });
      console.log("added to localstorage");
    } else {
      let gotList: IAnimal[] = JSON.parse(getList);
      setAnimalList(gotList);
      console.log("already in local storage");
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
