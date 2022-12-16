import React, { useState } from "react";
import "./css/Tick.css";

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Grid = ({ squares, onClick }) => (
  <div className="grid">
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}
  </div>
);

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = player;
    setSquares(newSquares);
    setPlayer(player === "X" ? "O" : "X");

    // Call checkWinner here
    checkWinner();
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
        return;
      }
    }
    if (!squares.includes(null)) {
      setWinner("draw");
    }
  };
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setPlayer("X");
    setWinner(null);
  };

  const renderStatus = () => {
    if (winner === "X") {
      return "X wins! Click the reset button to start a new game";
    } else if (winner === "O") {
      return "O wins! Click the reset button to start a new game";
    } else if (winner === "draw") {
      return "It's a draw! Click the reset button to start a new game";
    } else {
      return `Player ${player}'s turn`;
    }
  };

  return (
    <div className="game">
      <h1>Welcome to Tic Tac Toe!</h1>
      <Grid squares={squares} onClick={handleClick} />
      <div className="status">{renderStatus()}</div>
      {winner ? <button onClick={resetGame}>Reset game</button> : null}
    </div>
  );
};

export default Game;
