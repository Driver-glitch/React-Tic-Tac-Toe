import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [boxes, setBoxes] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(boxes[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const boxPoints = boxes.slice(0, stepNumber + 1);
    const current = boxPoints[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setBoxes([...boxPoints, squares]);
    setStepNumber(boxes.length);
    setXisNext(!xIsNext);
      
  };
 

  return (
    <>
      <h1>React Tic Tac Toe - With Hooks</h1>
      <Board squares = {boxes[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">

        <h3>{(winner ? "Winner: " + winner : "Next Player: " + xO)}</h3>
       
    
      </div>
    </>
  );
};
   
export default Game;