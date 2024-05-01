import { useState } from "react";
import confetti from "canvas-confetti";

//Importar componentes
import { Square } from "./components/square.jsx";
import { TURNS } from "./constants.js";
import { checkWinnerFrom, checkEndGame } from "./logic/board.js";
import { WinnerModal } from "./components/WinnerModal.jsx";

function App() {
  //Se usa un estado para guardar el tablero
  //Creación de un estado con un array de 9 elementos con valor null
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  // null es que no hay ganador, false es que hay empate
  const [winner, setWinner] = useState(null);

  //Función para reiniciar el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
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
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      //Mostrar un mensaje con el ganador
      // alert(`Ganó ${newWinner}`);

      confetti();

      //Actualizar el estado del ganador
      setWinner(newWinner);

      // setWinner((prevWinner) => {
      //   console.log(`Ganador ${newWinner}, Ganador anterior ${prevWinner}`);
      //   return newWinner;
      // });
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //Empate
    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  );
}

export default App;
