import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
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

export const checkEndGame = (newBoard) => {
  //Revise si todos los cuadrados tienen un valor
  //Si todos los cuadrados tienen un valor, entonces hay un empate
  return newBoard.every((value) => value !== null);
};
