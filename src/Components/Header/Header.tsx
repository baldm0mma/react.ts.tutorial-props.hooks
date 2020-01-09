import React from "react";
import "./Header.css";

export interface Person {
  firstName: string;
  lastName: string;
}

export interface Props {
  text: string;
  age: number;
  ok: boolean;
  mySumFunc: (int1: number, int2: number) => number;
  person: Person;
}

export const Header: React.FC<Props> = ({ text, age, ok, mySumFunc, person }) => {
  return (
    <header>
      <h1>{`${text}, my name is ${person.firstName}, and I am ${age} years old.`}</h1>
    </header>
  );
};
