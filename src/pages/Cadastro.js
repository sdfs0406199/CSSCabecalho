import React, { Component } from 'react'; //importando objeto React 
import CabecalhoLogin from '../components/CabecalhoLogin'
import { css } from '@emotion/core';
import { SyncLoader } from 'react-spinners';
import '../assets/CSS/Cadastro.css';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UsuarioNome: '',
      UsuarioEmail: '',
      UsuarioComunidade: '',
      UsuarioSenha: '',
      UsuarioTipoId: '',
      UsuarioImagem: '',
      pictures: [],
      isLoading: false,
      fileInput: React.createRef()
    }
    this.cadastrarUsuario = this.cadastrarUsuario.bind(this)
  }

  cadastrarUsuario = (e) => {
      e.preventDefault();
      
      this.validarEmail()

      setTimeout(() => {

        this.setState({ isLoading: true })

        let usuario = new FormData()
        usuario.set("UsuarioNome", this.state.UsuarioNome);
        usuario.set("UsuarioEmail", this.state.UsuarioEmail);
        usuario.set("UsuarioComunidade", this.state.UsuarioComunidade);
        usuario.set("UsuarioSenha", this.state.UsuarioSenha);
        usuario.set("UsuarioTipoId", this.state.UsuarioTipoId);

        fetch('https://localhost:5001/api/usuariotbl', {
          method: 'POST',
          body: (usuario),
        })
        .then(response => {
          if (response.status == 200) {
            alert("Usuario Cadastrado")
          }       // this.setState({ isLoading: false })
        })
        .catch(error => console.log(error))

      }, 1000);

    }

  verificarSenha = (e) => {
    (this.state.UsuarioSenha.length >= 8) ?
      this.cadastrarUsuario(e) :
      alert('Sua senha não possui a quantidade de caracteres especifico')
  }

  atualizaSatetCampo(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  validarEmail = () => {

    let emailDominio = this.state.UsuarioEmail.split('@')[1];
    
    if (emailDominio === 'thoughtworks.com' || emailDominio === 'thoughtworks.com.br') {
      this.setState({ UsuarioTipoId : 2 })
    } else {
      this.setState({ UsuarioTipoId : 3 })
    }
  }


  render() {
    return (
      <div>
        <main className="cadastro-main">
          <CabecalhoLogin />
          <section id="banner-cadastro">
            <div className="texto-cadastro">
              <h1>CRIE SUA CONTA</h1>
            </div>
          </section>
          <form>
            <section className="cadastro-pai">
              <input className="cadastro-input" type="text" name="UsuarioNome" placeholder="Nome" value={this.state.UsuarioNome} onChange={event => this.setState({ UsuarioNome: event.target.value })} />
              <input className="cadastro-input" type="text" name="UsuarioEmail" placeholder="E-mail" value={this.state.UsuarioEmail} onChange={event => this.setState({ UsuarioEmail: event.target.value })} />
              <input className="cadastro-input" type="text" name="UsuarioComunidade" placeholder="Comunidade" value={this.state.UsuarioComunidade} onChange={event => this.setState({ UsuarioComunidade: event.target.value })} />
              <div>
                <input className="cadastro-input" type="password" name="UsuarioSenha" id="" placeholder="Senha" value={this.state.UsuarioSenha} onChange={event => this.setState({ UsuarioSenha: event.target.value })} />
                <span className="cadastro-span">*Mínimo de 8 caracteres</span>
              </div>
              <input className="cadastro-input" type="password" name="Confirmar senha" id="" placeholder="Confirmar senha" value={this.state.UsuarioSenha} onChange={event => this.setState({ UsuarioSenha: event.target.value })} />
              {/* <input ref={this.state.fileInput} type="file"></input> */}
              <button className="cadastro-botao" type='submit'
                disabled={this.state.isLoading}
                onClick={this.verificarSenha}
              >
                {this.state.isLoading === true ?
                  <SyncLoader
                    css={override}
                    sizeUnit={"px"}
                    size={10}
                    color={'#fff'}
                    loading={this.state.isLoading}
                  />
                  : 'Cadastrar'}
              </button>
            </section>
          </form>
        </main>
      </div>
    );
  }
}
export default Cadastro;