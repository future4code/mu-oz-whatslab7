import React from 'react'
import styled from 'styled-components'

const InputMensagem = styled.input`
width:50vw;
height: 6vh;
border-radius: 3vh;
border: none;
`

class TesteDigitarMensagemClasse extends React.Component {

    state = {
        mensagemDigitada: "",
    }

    onChangeMensagemDigitada = (e) => {
        this.setState({mensagemDigitada: e.value})
        console.log(this.state.mensagemDigitada)
    }

    render() {
        return (
            <div className="campo-digitar-mensagem">
                {/* aplicar a lógica aqui */}
                <InputMensagem type="text" id="digitar-mensagem" placeholder="digitar mensagem" onChange={'onChangeMensagemDigitada'} />
            </div>
        )
    }
}

export default TesteDigitarMensagemClasse;