import React from "react";
import { Form } from "./Components/Form/Form";
import { Header } from "./Components/Header/Header";
import "./App.css";

const App: React.FC = () => {
  const mySumFunc = (int1: number, int2: number): number => int1 + int2;
  return (
    <div className="App">
      <Header
        welcome="Hello World"
        person={{ firstName: "Jev", lastName: "Foorsberg", age: 30 }}
      />
      <Form mySumFunc={mySumFunc} />
    </div>
  );
};

export default App;
