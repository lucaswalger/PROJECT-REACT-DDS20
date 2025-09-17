import { useState } from "react";

const Listagem = () => {
  const [Lista, setLista] = useState(["Lucas", "Vitor", "Stephany", "Rodrigo"]);

  const [jogadores] = useState([
    { id: 1, nome: "Kaká", time: "Milan", number: 8 },
    { id: 2, nome: "Bruno Henrique", time: "Wolfsbug", number: 16 },
    { id: 3, nome: "Di Stefano", time: "Real Madrid", number: 10 },
  ]);

  const [numero, setNumero] = useState(1);

  return (
    <div>
      <button onClick={() => {
        setNumero(numero + 1);
        console.log([...Lista]);
        setLista([...Lista, numero]);
      }}>Adicionar na lista</button>

      <h3>Listagem</h3>
      <ul>
        <li>João Lucas</li>
        <li>Marcelo</li>
        {Lista.map((valor, index) => (
          <li key={index}>{valor}</li>
        ))}
      </ul>

      <h2>Lista de Jogidorres</h2>
      {jogadores.map((jogador) => (
        <h3 key={jogador.id}>
          O jogador {jogador.nome} jogou no time {jogador.time} e usou a camisa
          de número {jogador.number}
        </h3>
      ))}
    </div>
  );
};

export default Listagem;
