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
    updateBoard(index);
  };

  // Se muestra el valor del cuadrado
  return (
    <div onClick={handelClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  // Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  //Se usa un estado para guardar el tablero
  //Creación de un estado con un array de 9 elementos con valor null
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    //Revisa todas las combinaciones posibles
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] && //Si el cuadrado tiene un valor
        boardToCheck[a] === boardToCheck[b] && //Si los dos cuadrados son iguales
        boardToCheck[a] === boardToCheck[c] //Si los tres cuadrados son iguales
      ) {
        return boardToCheck[a]; //Devuelve el valor del cuadrado x u o
      }
    }
    return null; //Si no hay ganador
  };

  const updateBoard = (index) => {
    // Si el cuadrado ya tiene un valor, no se puede actualizar o si ya hay un ganador
    if (board[index] || winner) return;

    // Crear un nuevo tablero con el valor del cuadrado actualizado
    const newBoard = [...board];
    newBoard[index] = turn; //x u o
    // Actualiza el estado del tablero
    setBoard(newBoard);

    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      //Mostrar un mensaje con el ganador
      alert(`Ganó ${newWinner}`);
      //Actualizar el estado del ganador
      setWinner(newWinner);
    }
  };

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
