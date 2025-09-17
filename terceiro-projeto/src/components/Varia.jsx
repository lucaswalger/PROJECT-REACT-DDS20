import { useState } from "react";

const Varia = () => {
  // Vaiavel padrão
  let itgo = "Batman";
  let numero = 24;

  // Variavel com hook useState
  const [number, setNumber] = useState(9);
  const [heroi, setHeroi] = useState("Batman é: ");

  return (
    <div>
      <p>A palavra sorteada foi: {itgo}</p>

      <h1>{numero}</h1>
      <button
        onClick={() => {
          numero++;
          console.log(numero);
        }}
      >
        Aumentar contagem
      </button>

      {/* USO DE VARIAVEIS A PARTIR DE AGORA */}
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 2);
        }}
      >
        Aumentar contagem
      </button>
      <button
        onClick={() => {
          setNumber(9);
        }}
      >
        Resetar
      </button>
      <button
        onClick={() => {
          setNumber(number - 2);
        }}
      >
        Diminuir contagem
      </button>

      {/* Crie um itulo com nome de HERÓI, e um botão que revele sua identidade secreta  */}
      <h1>{heroi}</h1>
      <button
        onClick={() => {
          setHeroi("Bruce Wayne");
        }}
      >
        Revelar Identidade
      </button>
      {/* <h1>{heroi}</h1>
      <button onClick={() => {setHeroi(heroi + "Bruce Wayne");}}>Revelar Identidade</button> */}
    </div>
  );
};

export default Varia;
