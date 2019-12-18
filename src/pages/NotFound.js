import React, { Component } from 'react';
import '../assets/CSS/NotFound.css';
import Api from '../services/Api';
import Cabecalho from '../components/CabecalhoSemBotao';
import Rodape from '../components/Rodape';

class NotFound extends Component{
  render(){
    return(
      <div>
        <Cabecalho/>
    <main>
        <section>
            <div className="banner-tela-notfound">
                <div className="titulo-tela-notfound">
                    <h1>404</h1>
                </div>
            </div>
        </section>

        <section className="conteudo-not-found">
            <div className="texto-pagina-notfound">
                <p> Página não encontrada, confira o endereço no seu navegador, ou entre em contato através do
                    eventos-sp@thoughtworks.com para informar o problema.
                </p>
            </div>
            
        </section>
    </main>
    <Rodape/>
      </div>
    )
  }
}

export default NotFound;