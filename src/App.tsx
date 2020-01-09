import React from "react";
import { Header } from "./Components/Header/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header name="Jev" age={30} />
    </div>
  );
};

export default App;
