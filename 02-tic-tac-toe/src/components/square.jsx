// Cuadrado del tablero
// ------------------------------------------
// Children es el valor que se muestra en el cuadrado
// updateBoard es la función que se ejecuta cuando se hace click en el cuadrado
// index es el índice del cuadrado en el tablero
// isSelected es un booleano que indica si el cuadrado está seleccionado
export const Square = ({ children, isSelected, updateBoard, index }) => {
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
