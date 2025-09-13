import React from 'react'

const TemplateExpressions = () => {
//Aqui vai coódgos javascipt
    let nome = "Ronaldo"

    let jogador = {
        nome : "Aspas",
        time : "Mibr",
        jogo : "Valorant",
        nivel: "Muito bom"
    }

  return (
//Aqui vai seu html
    <div>TemplateExpressions
        <h1>Olá, meu nome é {nome}</h1>
        <p>Seu nome é {jogador.nome}, seu time é {jogador.time}, joga {jogador.jogo} e ele é {jogador.nivel}</p>

    </div>
                              
  )
}

export default TemplateExpressions