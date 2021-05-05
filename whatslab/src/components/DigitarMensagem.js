import react from 'react'; //tem que fazer alguma coisa assim, né?
// import './App.css'; //importar css

function DigitarMensagem() {
  return (
    <div className="campo-digitar-mensagem">
      {/* aplicar a lógica aqui */}
      <input type="text" id="digitar-mensagem" placeholder="digitar mensagem"/>
    </div>
  );
}

export default DigitarMensagem;