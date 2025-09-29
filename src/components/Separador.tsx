import React from "react";
import "./Separador.css";
type SeparadorProps = {
  id?: string;
  title: string;
};

export const Separador: React.FC<SeparadorProps> = ({ title }) => {
  return (
    <div className="d-flex align-items-center justify-content-center separador-contenedor my-4">
      <div className="linea-izq"></div>
      <h2 className="separador-titulo">{title}</h2>
      <div className="linea-der"></div>
    </div>
  );
};
