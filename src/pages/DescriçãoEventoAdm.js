import React, { Component } from 'react'; //importando objeto React 
import '../assets/CSS/EditarEventoAdm.css';
import Api from '../services/Api';
import Cabecalho from '../components/CabecalhoSemBotao';
import Rodape from '../components/Rodape';


class DescriçãoEventoAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventoId: '',
            evento: {
                eventoId: '' ,
                eventoNome: '',
                eventoData: '',
                eventoHorarioComeco: '',
                eventoHorarioFim: '',
                eventoDescricao: '',
                eventoCategoriaId: '',
                eventoEspacoId: '',
                eventoStatusId: '',
                usuarioId: '',
                usuarioNome: '',
                eventoImagem: '',
                eventoLinkInscricao: '',
                listaUsuarios: [],
                criadorUsuario: {
                    usuarioId: '',
                    usuarioNome: '',
                }
            }
        }
        this.buscarEvento = this.buscarEvento.bind(this)
        this.SetIdEventAndGetEventInfo = this.SetIdEventAndGetEventInfo.bind(this)
        this.alterarEvento = this.alterarEvento.bind(this)
        // this.alterarEvento = this.alterarEvento.bind(this)
    }


    buscarEvento() {
        var id = localStorage.getItem('idEventoShow')
        fetch('https://localhost:5001/api/eventotbl/evento/' + id)
            .then(resposta => resposta.json())
            .then(resposta => {
                this.setState({ evento: resposta }, () => console.log("Resposta: ", resposta));
            })
            .catch((erro) => console.log(erro))
    }

    SetIdEventAndGetEventInfo() {
        console.log('id props: ',this.props.location.id)
        if (this.props.location.id) {
            localStorage.setItem('idEventoShow', this.props.location.id)
        }

        this.buscarEvento()
    }

    alterarEvento = (evento) => {
        console.log('entrei no alterar')
        this.setState({
            evento:{
                eventoId: localStorage.getItem('idEventoShow') ,
                eventoNome: evento.eventoNome,
                eventoData: evento.eventoData,
                eventoHorarioComeco: evento.eventoHorarioComeco,
                eventoHorarioFim: evento.eventoHorarioFim,
                eventoDescricao: evento.eventoDescricao,
                eventoCategoriaId: evento.eventoCategoriaId,
                eventoEspacoId: evento.eventoEspacoId,
                eventoStatusId: evento.eventoStatusId,
                usuarioId: evento.usuarioId,
                usuarioNome: evento.usuarioNome,
                eventoImagem: evento.eventoImagem,
                eventoLinkInscricao: evento.eventoLinkInscricao,
                listaUsuarios: [],
                criadorUsuario: {
                    usuarioId: '',
                    usuarioNome: '',
                }
            }
        })
        this.aprovarEvento()
    }

    aprovarEvento(event){
        console.log('entrei no aprovar')
        var id = localStorage.getItem('idEventoShow')
        fetch('https://localhost:5001/api/eventotbl/' + id, {
            method: 'PUT',
            body: JSON.stringify(this.state.evento),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(response => {
            // console.log(response)
            if(this.state.evento.eventoStatusId === 3){
                this.state.evento.eventoStatusId = 1
                alert('Evento aprovado')
                console.log('status novo: ', this.state.evento.eventoStatusId)
            }
        })
        console.log('EVENTO PARA APROVAR: ',this.state.evento)
    }

    // putSetState = (input) => {
    //     this.setState({
    //       evento: {
    //         ...this.state.evento, [input.target.name]: input.target.value
    //       }
    //     })
    //   }


    componentDidMount() {
        this.SetIdEventAndGetEventInfo()
        this.alterarEvento()
        // this.alterarEvento()
    }

    render() {
        return (
            <main>
                <Cabecalho />
                <section className="secao-geral-descricao2">

                    <section className="container_descrição2">

                        <div className="esquerda_topo_descrição2">
                            <h1 className="h1_descrição2">{this.state.evento.eventoNome}</h1>
                        </div>

                        <div className="usuario_descrição2">

                            <div className="imagem-usuario2">
                                <img src={require("../assets/imagens/perfil1.png")}
                                    alt="Logo da comunidade Nerdzão, um desenho de um cérebro rosa com um ocúlos de armação preta" />
                            </div>

                            <div className="nome-usuario-descrição2-evento">
                                <p>Thais Siqueira</p>
                            </div>

                        </div>

                        <div className="descrição2_descrição2">

                            <div className="imagem-evento2">
                                <img src={require("../assets/imagens/Evento1.jpeg")}
                                    alt="Banner do evento Nerdgirlz #22 - Panic! at the LINUX, com um fundo roxo." />
                            </div>

                            <div className="descricao2-evento">
                                <p className="titulo-descrição2">Detalhes</p>
                                <p>{this.state.evento.eventoDescricao}</p>
                            </div>

                        </div>

                    </section>


                    <section className="quadrado_forades2">

                        <div className="direita_topo_descrição2">

                            <div className="botao-aprovar-descricao2-evento">
                                <button onClick={this.aprovarEvento} value='1' href="#">Aprovar Evento</button>
                            </div>

                            <div className="botao-recusar-descricao2-evento">
                                <button value='3' href="#">Recusar Evento</button>
                            </div>

                            <div className="botao-editar-descricao2-evento">
                                <button href="#">Editar Evento</button>
                            </div>



                        </div>

                        <div className="info_descrição2">

                            <div className="textoinfo_descrição2">

                                <div className="parte1_descrição2">

                                    <div className="data_descrição2">
                                        <div className="data_img-descrição2">
                                            <img src={require("../assets/imagens/clock.png")} alt="" />
                                            <p>Data e Horário</p>
                                        </div>

                                        <div className="data-horario-descrição2">
                                            <p>{this.state.eventoData}</p>
                                            <p>Das {this.state.evento.eventoHorarioComeco} </p>
                                            <p>às {this.state.evento.eventoHorarioFim}</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="parte2_descrição2">


                                    <div className="local_descrição2">

                                        <div className="nome_local_img-descrição2">
                                            <img src={require("../assets/imagens/pin.png")} alt="Pin de localização" />
                                            <p>Localização</p>
                                        </div>

                                        <div className="endereco_local_img-descrição2">
                                            <p>ThoughtWorks - Lounge</p>
                                            <p>Av. Paulista 2300, Conjunto 41</p>
                                            <p>São Paulo - SP</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <div className="parte3_descrição2">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3279061044573!2d-46.66348088502224!3d-23.5566638846853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59cd6d0340c1%3A0xb82b9c6071314983!2sThoughtWorks!5e0!3m2!1spt-BR!2sbr!4v1574946138238!5m2!1spt-BR!2sbr"
                        width="381.3" height="218" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div> */}

                        </div>

                    </section>

                </section>
                <Rodape />
            </main>
        )
    }
}

export default DescriçãoEventoAdm;