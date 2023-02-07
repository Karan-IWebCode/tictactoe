import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

const Btn = styled.button`
border: 2px solid red;
width:25vw;
height:15vh;
margin:3vw;
`
// xyz

interface Props {
  style: number
  Value: string
}

const ButtonComponent = ({ style, Value }: Props) => {
  const [Firstvalue, setFirstvalue] = useState("_");
  const [Secondvalue, setSecondvalue] = useState("_");
  const [Chance, setChance] = useState(true)
  const FirstPlayer = () => {
    setFirstvalue("X")
    toggle()
  }
  const SecondPlayer = () => {
    setSecondvalue("O")
    toggle()
  }
  const toggle = () => {
    setChance(current => !current)
    console.log("toggle called", Chance)
  }
  return (
    <>
      <Btn className=""
        onClick={
          () => {
            Chance ? FirstPlayer() : SecondPlayer()
          }}>
        {style}
        {Chance ? Firstvalue : Secondvalue}
      </Btn>
    </>
  );
};


export default ButtonComponent;
