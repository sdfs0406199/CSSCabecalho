import React, { Component } from 'react'
import '../assets/CSS/CabecalhoBotao.css'
import Logo from '../assets/imagens/LogoEventShare.png'

class CabecalhoBotao extends Component {
    
    logout() {
        localStorage.clear();
        window.location.href = '/';
    }
    
    
    render() {
        return (
            <div className="">
            <header>
            <section id="cabecalho-padrao2">
            <div className="itens-cabecalho-padrao2">
            
            <div className="logo-eventshare-cabecalho-padrao2">
            <a href="/">
            <img src={Logo} alt="Logo do projeto Eventshare" />
            </a>
            </div>
            
            
            <div className="menu-cabecalho-padrao2">
            <nav className="menu2">
            
            <ul>
            <li>
            <a href="/CriarEvento" id="btns-menu-cabecalho-padrao2">Publicar evento</a>
            </li>
            </ul>
            
            <ul>
            
            <li>
            <a onClick={this.logout.bind(this)} href="/">Sair</a>
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
    
    export default CabecalhoBotao
    
    