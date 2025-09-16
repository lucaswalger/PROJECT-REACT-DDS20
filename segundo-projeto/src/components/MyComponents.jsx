// Importação do css externo, pa uilização
import './MyComponents.css'

const MyComponents = () => {
  return (
    <div>
      <h1>Meu incrível componente</h1>
      <p>Parágrafo muito top do componente</p>
      
      {/* Css usando classe */}
      <p className='azul'>Este aqui não vai vazar</p>
 
    {/* Css inline */}
      <h2 style={{color:"blue", backgroundColor: "pink", fontSize: "100px"}}>TEXTO TOP, COM ESTILO TOP</h2>
    </div>
  )
}

export default MyComponents