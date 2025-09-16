import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from './vite.svg'
import './App.css'
import FirstComponent from './componentes/FirstComponent'
import SecondComponent from './componentes/SecondComponent'
import TemplateExpressions from './componentes/TemplateExpressions'
import Event from './componentes/Event'
import MostrarImagens from './componentes/MostrarImagens'
import PCexplosivo from './componentes/PCexplosivo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FirstComponent/>

      <SecondComponent/>

      <TemplateExpressions/> */}

      <Event/>
      
      <MostrarImagens/>

      <PCexplosivo/>
    </>
  )
}

export default App
