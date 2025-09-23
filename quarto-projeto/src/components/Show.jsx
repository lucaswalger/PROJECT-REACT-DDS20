import React from 'react'


// props = irformações que são passadas para o componente
const Show = (props) => {
  return (
    <div>
        
        <h1>Show</h1>
        <h3>O nome do usuário é: 
            {props.name}
        </h3>
    </div>
  )
}

export default Show