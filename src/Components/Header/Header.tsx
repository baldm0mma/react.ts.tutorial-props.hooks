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
  const [numbers, updateNumbers] = useState({ num1: "", num2: "" });
  const [total, updateSum] = useState(0);
  const resetInputs = (): void => {
    updateNumbers({ num1: "", num2: "" });
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.id;
    const value = e.target.value;
    updateNumbers({ ...numbers, [name]: value });
  };
  const handleClick = (): void => {
    const sum: number = mySumFunc(
      parseInt(numbers.num1),
      parseInt(numbers.num2)
    );
    updateSum(sum);
    resetInputs();
  };
  return (
    <header>
      <h1>{`${text}, my name is ${person.firstName}, and I am ${age} years old.`}</h1>
      <form>
        <label htmlFor="num1">First Number:</label>
        <input
          type="number"
          id="num1"
          placeholder="Enter first number"
          onChange={handleChange}
          value={numbers.num1}
        />
        <label htmlFor="num2">Second Number:</label>
        <input
          type="number"
          id="num2"
          placeholder="Enter second number"
          onChange={handleChange}
          value={numbers.num2}
        />
        <input type="button" onClick={handleClick} value="Submit" />
        <p>Sum: {total && <span>{total}</span>}</p>
      </form>
    </header>
  );
};
