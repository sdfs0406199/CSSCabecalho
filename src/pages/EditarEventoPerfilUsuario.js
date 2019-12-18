import React, { Component } from 'react';
import Api from '../services/Api';
import '../assets/CSS/EditarEventoPerfilUsuario.css';
import CabecalhoBotao from '../components/CabecalhoBotao';
import Rodape from '../components/Rodape';
import { parseJwt } from '../services/auth';
import Moment from 'react-moment';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class EditarEventoPerfilUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventoId: this.props.location.id,
      evento: '',
      eventoNome: '',
      eventoDescricao: '',
      eventoData: '',
      eventoHorarioComeco: '',
      eventoHorarioFim: '',
      usuario: '',
      usuarioId: parseJwt().UserId,
      usuarioNome: '',
      // categoria: '',
      // categoriaId: '',
      // categoriaNome: '',
      eventoEspaco: '',
      eventoEspacoId: '',
      espacoNome: '',
      editarModal: {
        eventoId: this.props.location.id,
        evento: '',
        eventoNome: '',
        eventoDescricao: '',
        eventoData: '',
        eventoHorarioComeco: '',
        eventoHorarioFim: '',
        usuario: '',
        usuarioId: parseJwt().UserId,
        usuarioNome: '',
        // categoria: '',
        // categoriaId: '',
        // categoriaNome: ''
        eventoEspaco: '',
        eventoEspacoId: '',
        espacoNome: '',
      }
    }
    this.buscarEvento = this.buscarEvento.bind(this);
    this.buscarUsuario = this.buscarUsuario.bind(this);
    // this.buscarCategoria = this.buscarCategoria.bind(this);
  }

  buscarUsuario() {
    console.log("id usuario:" + this.state.usuarioId)
    fetch('https://localhost:5001/api/usuariotbl/' + this.state.usuarioId)
      .then(resposta => resposta.json())
      .then(data => {
        this.setState({ usuario: data })
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  // buscarCategoria() {
  //   console.log("id categoria:" + this.state.categoriaId)
  //   fetch('https://localhost:5001/api/categoria/' + this.state.categoriaId)
  //     .then(resposta => resposta.json())
  //     .then(data => {
  //       this.setState({ categoria: data })
  //     })
  //     .catch((erro) => {
  //       console.log(erro)
  //     })
  // }

  buscarEvento() {
    console.log("id novo:" + this.state.eventoId)
    fetch('https://localhost:5001/api/eventotbl/evento/' + this.state.eventoId)
      .then(resposta => resposta.json())
      .then(data => {
        this.setState({
          evento: data,
          usuario: data,
        })
      })
      .catch(erro => {
        console.log(erro);
      })
  }

  putSetState = (input) => {
    this.setState({
      editarModal: {
        ...this.state.editarModal, [input.target.name]: input.target.value
      }
    })
  }

  alterarEvento = (evento) => {
    this.setState({
      editarModal: {
        eventoId: evento.eventoId,
        eventoNome: evento.eventoNome,
        eventoDescricao: evento.eventoDescricao,
        eventoData: evento.eventoData,
        eventoHorarioComeco: evento.eventoHorarioComeco,
        eventoHorarioFim: evento.eventoHorarioFim,
        // categoriaId: categoria.categoriaId,
        // categoriaNome: categoria.categoriaNome,
      }
    })
    console.log(this.state.evento.eventoId);
    console.log(this.state.evento.eventoNome);
    console.log(this.state.evento.eventoDescricao);
    console.log(this.state.evento.eventoData);
    console.log(this.state.evento.eventoHorarioComeco);
    console.log(this.state.evento.eventoHorarioFim);
    // console.log(this.state.categoria.categoriaId);
    // console.log(this.state.categoria.categoriaNome);

    this.toggle();
  }

  salvarAlteracoes = (event) => {
    event.preventDefault();
    console.log("id salvar: " + this.state.eventoId)
    fetch('https://localhost:5001/api/eventotbl/' + this.state.eventoId, {
      method: "PUT",
      body: JSON.stringify(this.state.editarModal),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(resposta => resposta.json())
      .then(setTimeout(() => {
        this.buscarEvento()
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
    this.buscarEvento();
    this.buscarUsuario();
    // this.buscarCategoria();
  }

  render() {
    return (
      <div>
        <CabecalhoBotao />
        <main className="main-editar-evento-perfil-usuario">

          <section className="secao-geral-descricao4">

            <section className="container_descrição4">

              <div key={this.state.evento.eventoId} className="esquerda_topo_descrição4">
                <h1 className="h1_descrição4">{this.state.evento.eventoNome}</h1>
              </div>

              <div className="usuario_descrição4">

                <div className="imagem-usuario4">
                  <img src={require("../assets/imagens/iconeUsuario.png")} alt="Logo da comunidade Nerdzão, um desenho de um cérebro rosa com um ocúlos de armação preta" />
                </div>

                <div className="nome-usuario-descrição4-evento">
                  <p>{this.state.usuario.usuarioNome}</p>
                </div>

              </div>

              <div className="descrição4_descrição4">

                <div className="imagem-evento4">
                  <img src={require("../assets/imagens/Evento1.jpeg")} alt="Banner do evento Nerdgirlz #22 - Panic! at the LINUX, com um fundo roxo." />
                </div>

                <div className="descricao4-evento">
                  <p>{this.state.evento.eventoDescricao}</p>
                </div>

              </div>

            </section>

            <section className="quadrado_forades4">
              <div className="direita_topo_descrição4">
                <div className="botao-edicao-concluida-descricao4-evento">
                  <button type="submit" onClick={i => this.alterarEvento(this.state.evento)}>Editar</button>
                </div>
                <div className="botao-deletar-descricao4-evento">
                  <button type="submit">Deletar</button>
                </div>
              </div>
              <div className="info_descrição4">
                <div className="textoinfo_descrição4">
                  <div className="parte1_descrição4">
                    <div className="data_descrição4">
                      <div className="data_img-descrição4">
                        <img src={require("../assets/imagens/clock.png")} alt="" />
                        <p>Data e Horário</p>
                      </div>
                      <div className="data-horario-descrição4">
                        <Moment className='data-formato-home' format="DD/MM/YYYY">
                          <p>{this.state.evento.eventoData}</p>
                        </Moment>
                        <p>{this.state.evento.eventoHorarioComeco} às {this.state.evento.eventoHorarioFim}</p>
                      </div>
                    </div>
                  </div>
                  <div className="parte2_descrição4">
                    <div className="local_descrição4">
                      <div className="nome_local_img-descrição4">
                        <img src={require("../assets/imagens/pin.png")} alt="Pin de localização" />
                        <p>Localização</p>
                      </div>
                      <div key={this.state.evento.eventoId} className="endereco_local_img-descrição4">
                        <p>ThoughtWorks - Av. Paulista 2300, Conjunto 41</p>
                        <p>São Paulo - SP</p>
                        {/* <p>Lounge</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="parte3_descrição4">
                  <img src={require("../assets/imagens/maps.png")} alt="Pin de localização" />
                </div>
              </div>
            </section>
          </section>
        </main>

        <MDBContainer>
          <form onSubmit={this.salvarAlteracoes}>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>Editar Evento <br /><b>{this.state.editarModal.eventoNome}</b></MDBModalHeader>
              <MDBModalBody key={this.state.editarModal.eventoId} >
                <MDBInput
                  label='Nome'
                  value={this.state.editarModal.eventoNome}
                  name="eventoNome"
                  onChange={this.putSetState}
                />
                <MDBInput
                  label='Descrição'
                  value={this.state.editarModal.eventoDescricao}
                  name="eventoDescricao"
                  onChange={this.putSetState}
                />
                <MDBInput
                  label='Data'
                  value={this.state.editarModal.eventoData}
                  name="eventoData"
                  onChange={this.putSetState}
                />
                <MDBInput
                  label='Horário Começo'
                  value={this.state.editarModal.eventoHorarioComeco}
                  name="eventoHorarioComeco"
                  onChange={this.putSetState}
                />
                <MDBInput
                  label='Horário Fim'
                  value={this.state.editarModal.eventoHorarioFim}
                  name="eventoHorarioFim"
                  onChange={this.putSetState}
                />
                <MDBInput
                  label='Categoria'
                  value={this.state.editarModal.categoriaNome}
                  name="categoriaNome"
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







export default EditarEventoPerfilUsuario;