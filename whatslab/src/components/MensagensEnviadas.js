import React from 'react';
import styled from 'styled-components'

const FundoMensagem = styled.div`
background-color:yellow;
/* padding: 5px 10px; */
border-radius: 2vh;
display: flex;
margin: 10px;
`
class MensagensEnviadas extends React.Component {
  

  mensagensExibir = () => {
    return this.props.mensagens.map((mensagem, index) => {
      return (
        <FundoMensagem key={index}>
          <h5>{mensagem.usuario}</h5>
          <p>{mensagem.mensagem}</p>
        </FundoMensagem>
      )
    });
  };

  // usuarioExibir = () => {
  //   return this.props.usuarios.map((usuario) => {
  //     return usuario

  //   });
  // };


  render() {
    return (
      <div>
        {this.mensagensExibir()}
      </div>
    );
  }
}


export default MensagensEnviadas;