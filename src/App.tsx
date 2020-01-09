import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";

const App: React.FC = () => {
  const mySumFunc = (int1: number, int2: number): number => int1 + int2;
  return (
    <div className="App">
      <Header
        text="Hello World"
        age={37}
        ok={true}
        person={{ firstName: "Rachelle", lastName: "Forsberg" }}
        mySumFunc={mySumFunc}
      />
    </div>
  );
};

export default App;
