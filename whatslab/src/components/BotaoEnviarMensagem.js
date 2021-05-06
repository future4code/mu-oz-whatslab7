import React from 'react'; //tem que fazer alguma coisa assim, né?
// import './App.css'; //importar css
import styled from 'styled-components'


const BotaoEnviar = styled.button`
height:6vh;
width: 4vw;
border-radius: 2vh;
border: none;
`

function BotaoEnviarMensagem() {
  function enviarMensagem(){
    console.log("vai dar certo")
  }
  return (
    <div className="botao-enviar">
      <BotaoEnviar onClick={enviarMensagem}>Enviar</BotaoEnviar>
      {/* Aplicar a lógica aqui */}
      {/* <button onClick={}></button> ver se é aqui ou no app.js; o mesmo p/os inputs */}
    </div>
  );
}

export default BotaoEnviarMensagem;