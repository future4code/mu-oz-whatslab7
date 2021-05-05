import react from 'react'; //tem que fazer alguma coisa assim, né?
// import './App.css'; //importar css

function Usuario() {
  return (
    <div className="campo-usuario">
      {/* aplicar a lógica aqui */}
      <input type="text" placeholder="Usuário" name="nome" id="nome-usuario"/>
    </div>
  );
}

export default Usuario;