import React from 'react'

import CachorroBogo from "../assets/Cachorobogo.jpg"

const MostrarImagens = () => {
  return (
    <div>
        {/* Imagens via link externo */}
        <h3>Cachorro do Satan</h3>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dlB__kYeL58sHGdE2BS-ombTGsfi1AoyCg&s" alt="" width={900} height={500}/>

        {/* Imagens via pasta assets */}
        <h3>Isso é um cachorro ???</h3>
        <img src={CachorroBogo} alt="" width={900} height={500}/>

        {/* Imagens via pasta pública */}
        <h3>Esse carro é maravilhoso</h3>
        <img src="../ChevroletOpalaSS.jpg" alt="" width={900} height={500}/>

    </div>
  )
}

export default MostrarImagens