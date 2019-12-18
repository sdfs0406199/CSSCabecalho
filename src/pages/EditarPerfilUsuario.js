import Api from '../services/Api';
import React, { Component } from 'react';
import '../assets/CSS/EditarPerfilUsuario.css';
import Cabecalho from '../components/CabecalhoBotao';
import Rodape from '../components/Rodape';
import TopoPerfil from '../components/TopoPerfil';
import { parseJwt }  from '../services/auth';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class EditarPerfilUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      usuarioId: parseJwt().UserId,
      usuarioNome: '',
      usuarioEmail: '',
      usuarioComunidade: '',
      usuarioSenha: '',
      usuarioTipoId: parseJwt().Tipo,
      editarModal: {
        usuario: '',
        usuarioId: parseJwt().UserId,
        usuarioNome: '',
        usuarioEmail: '',
        usuarioComunidade: '',
        usuarioSenha: '',
      }
    }

    this.buscarUsuario = this.buscarUsuario.bind(this);
    this.salvarAlteracoes = this.salvarAlteracoes.bind(this);
  }

  buscarUsuario(){
    fetch('https://localhost:5001/api/usuariotbl/' + this.state.usuarioId)
      .then(resposta => resposta.json())
      .then(data => {
        this.setState({ usuario: data })
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  putSetState = (input) =>{
    this.setState({
          editarModal : {
              ...this.state.editarModal, [input.target.name] : input.target.value
          }   
      })
  }

  alterarUsuario() {
    this.setState({
      editarModal: {
        usuarioId: this.state.usuario.usuarioId,
        usuarioNome: this.state.usuario.usuarioNome,
        usuarioEmail: this.state.usuario.usuarioEmail,
        usuarioComunidade: this.state.usuario.usuarioComunidade,
        usuarioSenha: this.state.usuario.usuarioSenha,
        usuarioTipoId: this.state.usuario.usuarioTipoId
      }
    })

    this.toggle();
  }

  salvarAlteracoes = (event) => {
    event.preventDefault();
    
    fetch('https://localhost:5001/api/usuariotbl/'+ this.state.usuario.usuarioId, {
      method: "PUT",
      body: JSON.stringify(this.state.editarModal),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(resposta => resposta.json())
      .then(setTimeout(() => {
          this.buscarUsuario()
        }, 1000)
      )
      .catch(erro => console.log(erro))
      this.toggle();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount() {
    this.buscarUsuario();
  }

  render() {
    return (
      <div>
        <Cabecalho />
        <TopoPerfil />
        <main className="usuario-editar-perfil-main">
          <section className="usuario-editar-perfil-pai">

                  <div key={this.state.usuario.usuarioId} className="usuario-editar-perfil-dados">

                    <div className="usuario-editar-perfil-nome">
                      <p>{this.state.usuario.usuarioNome}</p>
                    </div>

                    <div className="usuario-editar-perfil-email">
                      <p>{this.state.usuario.usuarioEmail}</p>
                    </div>

                    <div className="usuario-editar-perfil-comunidade">
                      <p>{this.state.usuario.usuarioComunidade}</p>
                    </div>

                    <div className="usuario-editar-perfil-senha">
                      <p>{this.state.usuario.usuarioSenha}</p>
                    </div>

                    <div className="usuario-editar-perfil-button">
                      <button type="submit" onClick={i => this.alterarUsuario(this.state.usuario)} className="usuario-editar-perfil-botao-editar">Editar</button>
                    </div>

                  </div>
          </section>
        </main>

        <MDBContainer>
          <form onSubmit={this.salvarAlteracoes}>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>Editar Perfil</MDBModalHeader>
              <MDBModalBody  key={this.state.editarModal.usuarioId} >
                <MDBInput
                  label='Nome'
                  value={this.state.editarModal.usuarioNome}
                  name="usuarioNome"
                  onChange={this.putSetState}
                />
                <MDBInput
                  label='Email'
                  value={this.state.editarModal.usuarioEmail}
                  name="usuarioEmail"
                  onChange={this.putSetState}
                />
                <MDBInput
                  label='Comunidade'
                  value={this.state.editarModal.usuarioComunidade}
                  name="usuarioComunidade"
                  onChange={this.putSetState}
                />
                <MDBInput
                  label='Senha'
                  value={this.state.editarModal.usuarioSenha}
                  name="usuarioSenha"
                  onChange={this.putSetState}
                />
                </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Cancelar</MDBBtn>
                <MDBBtn type="submit" color="primary">Salvar</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </form>
        </MDBContainer>

        <Rodape />
      </div>
    );
  }
}
export default EditarPerfilUsuario
