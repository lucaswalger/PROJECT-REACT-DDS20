import React from 'react'
import Show from '../components/Show'
import ShowDois from '../components/ShowDois'

const MostrarCoisas = () => {
  return (
    <div>
        <h1>MostrarCoisas</h1>
        {/* Chamando componente Show, passando uma propriedade name com um valor */}
        <Show name={"Ronaldinho"}/>
        <Show name={"Zico"}/>

        <ShowDois time="Grêmio" pais="Brasil" posicao="10"/>
        <ShowDois time="Flamengo" pais="Brasil" posicao="10"/>
        <ShowDois time="Real Madrid" pais="Itália" posicao="2"/>
        
    </div>
  )
}

export default MostrarCoisas