import { useState } from "react";
import Search from "./components/Search";
import Nav from "./components/Nav";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodList from "./components/FoodList";
import FoodDetails from "./components/FoodDetails";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("")

  return (
    <>
      <Nav />

      <Search foodData={foodData} setFoodData={setFoodData} />

      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
