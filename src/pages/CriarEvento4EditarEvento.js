import React, { Component } from 'react';
import '../assets/CSS/CriarEvento4.css'
import Cabecalho from '../components/CabecalhoBotao'
import Rodape from '../components/Rodape'
import ImageUploader from 'react-images-upload';
import { usuarioAutenticado, parseJwt } from '../services/auth';
import { SyncLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class CriarEvento4 extends Component {
    constructor(props) {
        super(props);
        // this.onDrop = this.onDrop.bind(this);
        this.state = {
            eventoId: this.props.location.id,
            evento: {
                eventoNome: '',
                eventoData: '',
                eventoHorarioComeco: '',
                eventoHorarioFim: '',
                eventoDescricao: '',
                eventoCategoriaId: '',
                eventoEspacoId: '',
                eventoStatusId: 3,
                eventoLinkInscricao: '',
                eventoRestrito: false,
                eventoNumeroParticipantes: '',
                eventoDiversidade: '',
                eventoCoffe: '',
                eventoObsAdicional: '',
            },
            listaLugares: [],
            listaCategorias: []
        }
        this.buscarCategorias = this.buscarCategorias.bind(this);
        this.buscarLugares = this.buscarLugares.bind(this);
        this.buscarEvento = this.buscarEvento.bind(this);
    }

    buscarEvento() {
        console.log("id evento:" + this.state.eventoId)
        fetch('https://localhost:5001/api/eventotbl/evento/' + this.state.eventoId)
            .then(resposta => resposta.json())
            .then(data => {
                this.setState({
                    evento: data,
                })
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    putSetState = (input) => {
        this.setState({
            evento: {
                ...this.state.evento, [input.target.name]: input.target.value
            }
        })
    }

    // alterarUsuario() {
    //     this.setState({
    //         evento: {
    //             eventoNome: this.state.evento.eventoNome,
    //             eventoData: this.state.evento.eventoData,
    //             eventoHorarioComeco: this.state.evento.eventoHorarioComeco,
    //             eventoHorarioFim: this.state.evento.eventoHorarioFim,
    //             eventoDescricao: this.state.evento.eventoDescricao,
    //             eventoCategoriaId: this.state.evento.eventoCategoriaId,
    //             eventoEspacoId: this.state.evento.eventoEspacoId,
    //             eventoLinkInscricao: this.state.evento.eventoLinkInscricao,
    //             eventoRestrito: this.state.evento.eventoRestrito,
    //             eventoNumeroParticipantes: this.state.evento.eventoNumeroParticipantes,
    //             eventoDiversidade: this.state.evento.eventoDiversidade,
    //             eventoCoffe: this.state.evento.eventoCoffe,
    //             eventoObsAdicional: this.state.evento.eventoObsAdicional,
    //         }
    //     })
    // }



    // onDrop(picture) {
    //     this.setState({
    //         pictures: this.state.pictures.concat(picture),
    //     });
    //     console.log(picture)
    // }

    atualizaSatetCampo(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    buscarCategorias() {
        console.log('Entrei')
        fetch('http://localhost:5000/api/categoria')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaCategorias: data }))
            .catch((erro) => console.log(erro))
    }

    buscarLugares() {
        // console.log('Entrei')
        fetch('http://localhost:5000/api/espaco')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaLugares: data }))
            .catch((erro) => console.log(erro))
    }


    updateStateData(event) {
        this.setState({ data: event.target.value })
        console.log(this.state.data)
    }

    buscarCategorias() {
        this.setState({ loading: true })

        fetch('http://localhost:5000/api/categoria')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaCategorias: data }))
            .catch((erro) => console.log(erro))
    }

    alterarUsuario() {
        this.setState({
            evento: {
                usuarioId: this.state.usuario.usuarioId,
                eventoNome: this.state.usuario.eventoNome,
                eventoData: this.state.usuario.eventoData,
                eventoHorarioComeco: this.state.usuario.eventoHorarioComeco,
                usuarioSenha: this.state.usuario.usuarioSenha,
                usuarioTipoId: this.state.usuario.usuarioTipoId,
                eventoNome: '',
                eventoData: '',
                eventoHorarioComeco: '',
                eventoHorarioFim: '',
                eventoDescricao: '',
                eventoCategoriaId: '',
                eventoEspacoId: '',
                eventoStatusId: 3,
                // criadorUsuarioId: parseJwt().UserId,
                eventoLinkInscricao: '',
                eventoRestrito: false,
                eventoNumeroParticipantes: '',
                eventoDiversidade: '',
                eventoCoffe: '',
                eventoObsAdicional: '',
            }
        })

        this.toggle();
    }

    componentDidMount() {
        this.buscarCategorias()
        this.buscarLugares()
        this.buscarEvento()

        this.setState({ token: usuarioAutenticado() })

        if (usuarioAutenticado()) {

            this.setState({ acesso: parseJwt().Tipo })

        }
    }

    render() {
        return (

            <div className='CriarEvento4'>
                <Cabecalho />
                <main className='main-criar-evento-4'>
                    <div className="banner-criar-evento-4">
                    </div>

                    <div className="titulo-criar-evento-4">
                        <h1>PREENCHA O FORMULÁRIO</h1>
                    </div>

                    <div className='container-sub6'>
                        <form id="formulario-sub6">
                            <div className="criar-evento-4-pai-input">
                                <input className="criar-evento-4-input" type="text" name="eventoNome" value={this.state.evento.eventoNome} onChange={event => this.setState({ eventoNome: event.target.value })} placeholder="Nome do evento" />
                                <input className="criar-evento-4-input" type="text" name="eventoHorarioComeco" value={this.state.evento.eventoHorarioComeco} onChange={event => this.setState({ eventoHorarioComeco: event.target.value })} placeholder="Horário de início" />
                                <input className="criar-evento-4-input" type="text" name="eventoHorarioFim" value={this.state.evento.eventoHorarioFim} onChange={event => this.setState({ eventoHorarioFim: event.target.value })} placeholder="Horário do fim" />
                                <input className="criar-evento-4-input" type="text" name="eventoLinkInscricao" value={this.state.evento.eventoLinkInscricao} onChange={event => this.setState({ eventoLinkInscricao: event.target.value })} placeholder="Link para formulário de inscrição (opcional)" />
                                <input value={this.state.evento.eventoData} name='eventoData' onChange={event => this.setState({ eventoData: event.target.value })} type='date'></input>
                                <div className="criar-evento-4-div-texto">
                                    <textarea className="criar-evento-4-texto" cols="35" rows="5" name='eventoDescricao' onChange={event => this.setState({ eventoDescricao: event.target.value })} value={this.state.evento.eventoDescricao} placeholder="Descrição do evento para o site"></textarea>
                                </div>
                            </div>{/* fim criar-evento-4-pai-input */}

                            <select value={this.state.evento.eventoEspacoId} onChange={event => this.setState({ eventoEspacoId: event.target.value })} name='eventoEspacoId' id='id-select' className="filtro-categorias-home" >
                                <option id="" selected>Selecione um espaço</option>
                                {
                                    this.state.listaLugares.map(function (espaco) {
                                        return <option value={espaco.espacoId} key={espaco.espacoId} name="teste">{espaco.espacoNome}</option>
                                    })
                                }
                            </select>

                            <div className="radiogeral-sub6">
                                <p>Número de participantes:</p>
                                <div className="radio-sub6">
                                    <select name='eventoNumeroParticipantes' value={this.state.evento.eventoNumeroParticipantes} onChange={event => this.setState({ eventoNumeroParticipantes: event.target.value })}>
                                        <option id="" selected>Selecione o número de participantes</option>
                                        <option value='25'>0 - 25</option>
                                        <option value='40'>25 - 40</option>
                                        <option value='60'>41 - 60</option>
                                    </select>
                                </div>{/* fim radio-sub6 */}
                            </div>{/* fim radiogeral-sub6 */}

                            <div className="acesso-sub6">
                                <div className="categorias-sub6">
                                    <p>Selecione a categoria que o seu evento se encaixa:</p>
                                    <select name='eventoCategoriaId' value={this.state.evento.eventoCategoriaId} onChange={event => this.setState({ eventoCategoriaId: event.target.value })}>
                                        <option selected>Escolha uma categoria</option>
                                        {
                                            this.state.listaCategorias.map(function (categoria) {
                                                return <option value={categoria.categoriaId} key={categoria.categoriaId} name="teste">{categoria.categoriaNome}</option>
                                            })
                                        }
                                    </select>
                                </div>
                            </div>{/* fim acesso-sub6 */}


                            <div className="diversidade-sub6">
                                <p>Seu evento tem foco em diversidade?</p>

                                <select name='eventoDiversidade' value={this.state.evento.eventoDiversidade} onChange={event => this.setState({ eventoDiversidade: event.target.value })}>
                                    <option value="">Sim</option>
                                    <option value="">Não</option>
                                </select>

                            </div>

                            <div className="coffe-sub6">
                                <p>Você gostaria que a ThoughtWorks servisse coffe no seu evento?</p>
                                <select name='eventoCoffe' value={this.state.evento.eventoCoffe} onChange={event => this.setState({ eventoCoffe: event.target.value })}>
                                    <option value="True">Sim</option>
                                    <option value="False">Não</option>
                                </select>
                            </div>




                            {/* <div className="foto-sub6">
                                <p>Adicionar foto para o ícone do evento?(Opcional)</p>
                                <ImageUploader
                                    withIcon={true}
                                    buttonText='Escolha um arquivo'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png']}
                                    maxFileSize={5242880}
                                />
                            </div> */}

                            <div className="criar-evento-4-div-texto">
                                <textarea name='eventoObsAdicional ' value={this.state.evento.eventoObsAdicional} onChange={event => this.setState({ eventoObsAdicional: event.target.value })} className="criar-evento-4-texto" cols="35" rows="5" placeholder="Observações adicionais(opcional)"></textarea>
                            </div>

                            <div className="botão_sub6">
                                <button disabled={this.state.isLoading}
                                    onClick={this.cadastrarEvento}
                                >
                                    {this.state.isLoading === true ?
                                        <SyncLoader
                                            css={override}
                                            sizeUnit={"px"}
                                            size={10}
                                            color={'#fff'}
                                            loading={this.state.isLoading}
                                        />
                                        : 'Salvar'}
                                </button>
                            </div>


                        </form>

                    </div>{/* fim container-sub6 */}

                </main>
                <Rodape />
            </div >
        );
    }
}

export default CriarEvento4;