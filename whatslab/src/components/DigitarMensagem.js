import React from 'react'; //tem que fazer alguma coisa assim, né?
import styled from 'styled-components'; //importar css
// import App from '../App.js'

const InputMensagem = styled.input`
width:50vw;
height: 6vh;
border-radius: 3vh;
border: none;
`

function DigitarMensagem() {
  return (
    <div className="campo-digitar-mensagem">
      {/* aplicar a lógica aqui */}
      <InputMensagem type="text" id="digitar-mensagem" placeholder="digitar mensagem"/>
    </div>
  );
}

export default DigitarMensagem;