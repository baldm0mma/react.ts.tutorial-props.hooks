import React, { useState, ChangeEvent } from "react";
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

export interface State {
  num1: string;
  num2: string;
  sum: number;
}

export const Header: React.FC<Props> = ({
  text,
  age,
  ok,
  mySumFunc,
  person
}) => {
  const [sumNumbers, changeNumbers] = useState({ num1: "", num2: "", sum: 0 });
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.id;
    const value = e.target.value;
    changeNumbers({ ...sumNumbers, [name]: value });
  };
  const handleClick = (): void => {
    const sum = (): number => {
      return mySumFunc(parseInt(sumNumbers.num1), parseInt(sumNumbers.num2));
    }
    changeNumbers({ ...sumNumbers, sum })
  };
  return (
    <header>
      <h1>{`${text}, my name is ${person.firstName}, and I am ${age} years old.`}</h1>
      <form>
        <ul>
          <li>
            <label htmlFor="num1">First Number:</label>
            <input
              type="number"
              id="num1"
              placeholder="Enter first number"
              onChange={handleChange}
              value={sumNumbers.num1}
            />
          </li>
          <li>
            <label htmlFor="num2">Second Number:</label>
            <input
              type="number"
              id="num2"
              placeholder="Enter second number"
              onChange={handleChange}
              value={sumNumbers.num1}
            />
          </li>
          <li>
            <input type="button" onClick={handleClick} />
          </li>
          <li>{sumNumbers.sum && <p>{sumNumbers.sum}</p>}</li>
        </ul>
      </form>
    </header>
  );
};
