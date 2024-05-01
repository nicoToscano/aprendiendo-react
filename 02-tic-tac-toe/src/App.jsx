import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

// Cuadrado del tablero
// ------------------------------------------
// Children es el valor que se muestra en el cuadrado
// updateBoard es la función que se ejecuta cuando se hace click en el cuadrado
// index es el índice del cuadrado en el tablero
// isSelected es un booleano que indica si el cuadrado está seleccionado
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handelClick = () => {
    updateBoard();
  };

  // Se muestra el valor del cuadrado
  return (
    <div onClick={handelClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  //Se usa un estado para guardar el tablero
  //Creación de un estado con un array de 9 elementos con valor null
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = () => {
    //Cambia de jugador
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
  };

  console.log(board);

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
