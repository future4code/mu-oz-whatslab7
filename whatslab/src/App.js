import React from 'react'
import styled from 'styled-components'
// import DigitarMensagem from './components/DigitarMensagem.js'
import BotaoEnviarMensagem from './components/BotaoEnviarMensagem.js'
import TesteDigitarMensagemClasse from './components/TesteDigitarMensagemComClasse'

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


class App extends React.Component {
  render() {
    return (

      <div>

        <BodyMainContainer>
          <ConteinerWhats>
          <ConteinerCabecalhoContatos>
          </ConteinerCabecalhoContatos>
          <ConteinerCabecalhoMensagens></ConteinerCabecalhoMensagens>
          <ConteinerContatos/>
          <ConteinerDigitarMensagem>
          <TesteDigitarMensagemClasse/>
          <BotaoEnviarMensagem/>
          </ConteinerDigitarMensagem>
          
          </ConteinerWhats>


        </BodyMainContainer>

      </div>
    );
  }
}


export default App;

