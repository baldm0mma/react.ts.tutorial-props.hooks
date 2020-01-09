import React from "react";
import "./Header.css";

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export interface Props {
  welcome: string;
  person: Person;
}

export const Header: React.FC<Props> = ({ welcome, person }) => {
  return (
    <header>
      <h1>{`${welcome}, my name is ${person.firstName}, and I am ${person.age} years old.`}</h1>
    </header>
  );
};
