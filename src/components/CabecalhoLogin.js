import React, { Component } from 'react'
import '../assets/CSS/CabecalhoLogin.css'
import Logo from '../assets/imagens/LogoEventShare.png'

class CabecalhoLogin extends Component {
    render() {
        return (
            <div className="">
                <header>
                    <section id="cabecalho-CriarConta5">
                        <div className="itens-cabecalho-CriarConta5">

                            <div className="logo-eventshare-cabecalho-CriarConta5">
                                <a href="/">
                                    <img src={Logo} alt="Logo do projeto Eventshare" />
                                </a>
                            </div>

                            <div className="menu-cabecalho-CriarConta5">
                                <nav className="menu5">
                                    <ul>
                                        <li>
                                            <a href="/Login">Login</a>
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

export default CabecalhoLogin