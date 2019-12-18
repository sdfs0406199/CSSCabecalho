import React, { Component } from 'react';
import '../assets/CSS/CriarEvento1.css'
import CabecalhoSemBotao from '../components/CabecalhoSemBotao'
import CabecalhoLogado from '../components/CabecalhoLogado.js'
import Rodape from '../components/Rodape'
import { usuarioAutenticado, parseJwt } from '../services/auth';

class CriarEvento1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: usuarioAutenticado()
        }
    }

    componentDidMount() {
        this.setState({ token: usuarioAutenticado() })
        if (usuarioAutenticado()) {

            this.setState({ acesso: parseJwt().Roles })
            console.log("acesso " + parseJwt().Roles);
        }
    }

    render() {
        return (
            <div className='CriarEvento1'>
                {this.state.token === false ? (<CabecalhoSemBotao />) : (<CabecalhoLogado />)}
                <main>
                    <div className="banner-criar-evento">

                        <div className="titulo-banner-criar-evento">
                            <h1>Crie seu evento</h1>
                        </div>

                    </div>

                    <div className="conteudo-criar-evento-1">
                        <div className="textos-banner-criar-evento-1">

                            <div className="texto-banner-criar-evento-1">
                                <p>A ThoughtWorks São Paulo oferece dois espaços para você fazer seu evento e compartilhar o seu
                                    conhecimento
                        com a gente!</p>
                            </div>

                            <div className="texto-banner-criar-evento-1">
                                <p>
                                    A sua proposta do evento será revisada por nossos funcionários de acordo com a sua
                                    relevância
                                    para a
                        comunidade, e o organizador do evento será contatado através do e-mail cadastrado.</p>
                            </div>

                            <div className="texto-banner-criar-evento-1">
                                <p> O organizador do evento é responsável por toda a operação de seu evento, incluindo a
                                    promoção do
                                    mesmo,
                                    todo
                        o processo de recepção, organização e conteúdo.</p>
                            </div>

                            <div className="texto-banner-criar-evento-1">
                                <p> Para mais informações acesse o nosso FAQ na área de Contato no site.</p>
                            </div>


                            {this.state.token === false ? <p>Faça seu login para criar um evento</p> : <div className="botao-banner-criar-evento-1">
                                <a href="/CriarEvento4">
                                    Enviar Proposta
                                </a>
                            </div>}



                        </div>
                    </div>
                </main>


                <Rodape />
            </div>
        )
    }
}

export default CriarEvento1;