import React, { Component } from 'react'
import '../assets/CSS/CabecalhoCriarConta.css'
import Logo from '../assets/imagens/LogoEventShare.png'

class CabecalhoCriarConta extends Component {
    render() {
        return (
            <div className="">
                <header>
                    <section id="cabecalho-CriarConta1">
                        <div className="itens-cabecalho-CriarConta1">

                            <div className="logo-eventshare-cabecalho-CriarConta1">
                                <a href="/">
                                    <img src={Logo} alt="Logo do projeto Eventshare1" />
                                </a>
                            </div>

                            <div className="menu-cabecalho-CriarConta1">
                                <nav className="menu1">
                                    <ul>
                                        <li>
                                            <a href="/Cadastro">Criar Conta</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </section>
                </header>
            </div>
        )
    }
}

export default CabecalhoCriarConta