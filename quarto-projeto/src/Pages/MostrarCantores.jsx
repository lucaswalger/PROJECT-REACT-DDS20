import { useState } from "react";
import CardCantor from "../components/CardCantor";

const MostrarCantores = () => {
  const cantores = useState([
    {
      id: 1,
      nome: "Adoniran Barbosa",
      estilo: "Samba e Pagode",
      premioMelhor: true,
      posicao: 86,
    },
    {
      id: 1,
      nome: "Elis Regina",
      estilo: "MPB",
      premioMelhor: true,
      posicao: 67,
    },
    {
      id: 1,
      nome: "Alcione",
      estilo: "Samba e Pagode",
      premioMelhor: true,
      posicao: 74,
    },
    {
      id: 1,
      nome: "Alok",
      estilo: "Eletrônica",
      premioMelhor: true,
      posicao: 4,
    },
  ]);
  return 
  <div>
     <h1>MostrarCantores</h1>
     {cantores.map((cantor, index) => (
        <CardCantor key={cantor.id} name= {cantor.nome} gender={cantor.gender} thebest={cantor.premioMelhor} position= {cantor.posicao}/>
     ))}
  </div>;
};

export default MostrarCantores;
