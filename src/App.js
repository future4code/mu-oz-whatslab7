import React from 'react'
import styled from 'styled-components'
// import BotaoEnviarMensagem from './components/BotaoEnviarMensagem.js'
import MensagensEnviadas from './components/MensagensEnviadas'

const BodyMainContainer = styled.div`
  background-color: rgb(218,219,212);
  width: 100%;
  height:100vh;
  display:flex;
  align-content:center;
  justify-content:center;
`

const ConteinerWhats = styled.div`
  width: 76vw;
  height: 96vh;
  display:grid;
  grid-template-rows: 10vh 1fr 10vh;
  grid-template-columns: 1fr 3fr;
  background-color: lightcoral;
  align-self:center;
`
const ConteinerCabecalhoContatos = styled.div`
  background-color:gray;
`
const ConteinerCabecalhoMensagens = styled.div`
  background-color:purple;
`

const ConteinerContatos = styled.div`
  background-color:white;
  grid-row: 2 / 4;
`
const ConteinerDigitarMensagem = styled.div`
background-color: lightgreen;
grid-row:3;
display:flex;
align-items: center;
justify-content: space-evenly;
`
const InputMensagem = styled.input`
width:40vw;
height: 6vh;
border-radius: 3vh;
border: none;
`
const BotaoEnviar = styled.button`
height:6vh;
width: 4vw;
border-radius: 2vh;
border: none;
`

const ContainerExibirMensagens = styled.div`
padding: 10px;
background-color: cyan;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items: flex-end;
`
const InputUsuario = styled.input`
width:10vw;
height: 6vh;
border-radius:3vh;
border: none;
`


class App extends React.Component {
  state = {
    mensagensEnviadas: [{
      usuario: "",
      mensagem: ""
    }],
    // arrayMensagens: [],
    usuario: "",
    mensagemDigitada: "",
    // arrayUsuarios:[],

  }

 
  onChangeMensagemDigitada = (e) => {
    this.setState({ mensagemDigitada: e.target.value })
  }

  onChangeUsuario = (e) => {
    this.setState({ usuario: e.target.value })
}


  enviarMensagem = () => {
    const novaMensagem = {
      usuario: this.state.usuario,
      mensagem: this.state.mensagemDigitada,
    }
    console.log(novaMensagem)
    const arrayMensagens = [...this.state.mensagensEnviadas, novaMensagem]
    this.setState({
      mensagensEnviadas: arrayMensagens,
      usuario:"",
    mensagemDigitada:""
  })
  }



render() {
  return (

    <div>

      <BodyMainContainer>
        <ConteinerWhats>
          <ConteinerCabecalhoContatos>
          </ConteinerCabecalhoContatos>
          <ConteinerCabecalhoMensagens></ConteinerCabecalhoMensagens>
          <ConteinerContatos />
          <ConteinerDigitarMensagem>
            <InputMensagem type={"text"} placeholder={"digitar mensagem"} onChange={this.onChangeMensagemDigitada} value={this.state.mensagemDigitada} />
            <InputUsuario type={"text"} placeholder={"Usuário"} onChange={this.onChangeUsuario} value={this.state.usuario} />
            <BotaoEnviar onClick={this.enviarMensagem}>Enviar</BotaoEnviar>
          </ConteinerDigitarMensagem>
          <ContainerExibirMensagens>
            <MensagensEnviadas mensagens={this.state.mensagensEnviadas} /*usuarios={this.state.arrayUsuarios}*/ />
          </ContainerExibirMensagens>
        </ConteinerWhats>


      </BodyMainContainer>

    </div>
  );
}
}


export default App;

