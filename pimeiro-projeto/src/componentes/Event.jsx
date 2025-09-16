import React from 'react'

const Event = () => {
  
   const teste = () => {
    console.log("CHORA PAIXÃO!!!!!!!!")

    // e - Propriedade do evento
     console.log(e)
    
   }

   return (
    <div>Event
        {/* Função inline*/}
        <button onClick={() => {console.log("Cliquei")}}>Clique aqui</button>

        {/* Função externa ao elemento */}
         <button onClick={teste}>Aqui também</button>
    </div>
  )
}

export default Event