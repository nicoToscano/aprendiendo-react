export const saveGameToStorage = ({ turn, board }) => {
  //Guardar la partida
  window.localStorage.setItem("board", JSON.stringify(board));
  window.localStorage.setItem("turn", turn);
};

export const resetGameToStorage = () => {
  //Guardar la partida
  window.localStorage.setItem("board");
  window.localStorage.setItem("turn");
};
