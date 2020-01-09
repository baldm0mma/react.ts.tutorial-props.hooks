import React from "react";
import "./Header.css";

export interface Props {
  name: string;
  age: number;
}

export const Header: React.FC<Props> = ({ name, age }) => {
  return (
    <header>
      <h1>{`Hello, my name is ${name}, and I am ${age} years old.`}</h1>
    </header>
  );
};
