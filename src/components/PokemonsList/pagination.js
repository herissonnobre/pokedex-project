import "./styles.css";
import React, { useCallback } from "react";


export default function Pagination({ number, onNumberChange }) {
  // Incrementa a pagina
  const handleInputChangePlus = useCallback(
    (variavel) => {
      onNumberChange(number + variavel);
      console.log(number, "Plus");
    },
    [number]
  );

  return (
    <ul className="Lista">
      <button
        className="Barra"
        onClick={() => {
          handleInputChangePlus(-1);
        }}
      >
        {"<"}
      </button>

      <button
        className="Barra"
        onClick={() => {
          handleInputChangePlus(1);
        }}
      >
        {">"}
      </button>
    </ul>
  );
}
