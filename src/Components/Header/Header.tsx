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

export const Header: React.FC<Props> = () => {
  return (
    <header></header>
  )
}