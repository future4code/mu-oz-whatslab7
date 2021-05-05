import react from 'react'; //tem que fazer alguma coisa assim, né?
// import './App.css'; //importar css
import DigitarMensagem from './componentes/DigitarMensagem.js'
import Usuario from '/componentes/Usuario.js'
//um "novo" componente por mensagem?

function MensagemEnviada() {
    // const nomeUsuario = getElementById("nome-usuario").value
    // const mensagemDigitada = getElementById("digitar-mensagem").value
  return (
    <div className="campo-mensagem-enviada">
      {/* aplicar a lógica aqui */}
      {/* <h5>{nomeUsuario}</h5>
      <p>{mensagemDigitada}</p> */}
    </div>
  );
}

export default MensagemEnviada;