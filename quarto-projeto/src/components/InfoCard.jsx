// Importação do hook para pegar os parametros da url
import { useParams } from "react-router-dom";

const InfoCard = () => {
  // Gurda os parametros id em um uma variável
  const { id } = useParams();

  return (
    <div>
      {/* Mostra um texto juno com o valor do parametro enviado na url */}
      <h1>INFOCARD DE NÚMERO: {id}</h1>
    </div>
  );
};

export default InfoCard;
