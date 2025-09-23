import React from 'react'

const CardCantor = (id,name,gender,thebest, position) => {
  return (
    <div>
        <h3>O nome do cantor é: {name}</h3>
        <h3>Seu genero musical é: {gender}</h3>
        <h3>Sua posição no ranking global: {position}</h3>
        {thebest && <h3>Já foi o melhor do mundo</h3>}
    </div>
  );
}

export default CardCantor