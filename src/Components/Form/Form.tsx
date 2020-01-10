import React, { useState, ChangeEvent } from "react";
import "./Form.css";

export interface Props {
  mySumFunc: (int1: number, int2: number) => number;
}

export interface NumbersState {
  num1: string;
  num2: string;
}

export const defaultNumbersState: NumbersState = { num1: "", num2: "" };

export const Form: React.FC<Props> = ({ mySumFunc }) => {
  const [numbers, updateNumbers] = useState(defaultNumbersState);
  const [total, updateSum] = useState<null | number>(null);
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
    <section>
      <h3>Please use the following to add 2 numbers:</h3>
      <form>
        <div className="first number">
          <label htmlFor="num1">First Number:</label>
          <input
            type="number"
            id="num1"
            placeholder="Enter first number"
            onChange={handleChange}
            value={numbers.num1}
          />
        </div>
        <div className="second number">
          <label htmlFor="num2">Second Number:</label>
          <input
            type="number"
            id="num2"
            placeholder="Enter second number"
            onChange={handleChange}
            value={numbers.num2}
          />
        </div>
        <input className="myButton" type="button" onClick={handleClick} value="Calculate sum" />
        <p>Current sum: {total && <span>{total}</span>}</p>
      </form>
    </section>
  );
};
