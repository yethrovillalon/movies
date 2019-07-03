import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export class Gridmovies extends Component {

    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        }
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClose() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">A&ntilde;o</th>
                                    <th scope="col">Duracion</th>
                                    <th scope="col">Genero</th>
                                    <th scope="col">Director</th>
                                    <th scope="col">Idioma</th>
                                    <th scope="col">Pais</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">Produccion</th>
                                    <th scope="col">Detalle</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.pelis.Title.map((titulo, i) => <tr key={i}>
                                    <td>{titulo.Title}</td>
                                    <td>{titulo.Year}</td>
                                    <td>{titulo.Runtime}</td>
                                    <td>{titulo.Genre}</td>
                                    <td>{titulo.Director}</td>
                                    <td>{titulo.Language}</td>
                                    <td>{titulo.Country}</td>
                                    <td>{titulo.Type}</td>
                                    <td>{titulo.Production}</td>
                                    <td>{[titulo.Production ? <Button variant="primary" onClick={this.handleShow}>Ver</Button> : '']}</td>
                                </tr>)}
                            </tbody>
                            </table>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detalle Pelicula</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div class="table-responsive">
                            {this.props.pelis.Title.map((titulo, i) => <table key={i} class="table"><tr>
                                <th scope="col">Titulo</th>
                                <td>{titulo.Title}</td>
                            </tr>
                            <tr>
                                <th scope="col">A&ntilde;o</th>
                                <td>{titulo.Year}</td>
                            </tr>
                            <tr>
                                <th scope="col">Duracion</th>
                                <td>{titulo.Runtime}</td>
                            </tr>
                            <tr>
                                <th scope="col">Genero</th>
                                <td>{titulo.Genre}</td>
                            </tr>
                            <tr>
                                <th scope="col">Director</th>
                                <td>{titulo.Director}</td>
                            </tr>
                            <tr>
                                <th scope="col">Idioma</th>
                                <td>{titulo.Language}</td>
                            </tr>
                            <tr>
                                <th scope="col">Pais</th>
                                <td>{titulo.Country}</td>
                            </tr>
                            <tr>
                                <th scope="col">Tipo</th>
                                <td>{titulo.Type}</td>
                            </tr>
                            <tr>
                                <th scope="col">Produccion</th>
                                <td>{titulo.Production}</td>
                            </tr>
                            <tr>
                                <th scope="col">Premios</th>
                                <td>{titulo.Awards}</td>
                            </tr>
                            <tr>
                                <th scope="col">Puntuacion</th>
                                <td>{titulo.Metascore}</td>
                            </tr>
                            <tr>
                                <th scope="col">imdb Clasificacion</th>
                                <td>{titulo.imdbRating}</td>
                            </tr>
                            <tr>
                                <th scope="col">Fecha DVD</th>
                                <td>{titulo.DVD}</td>
                            </tr>
                            <tr>
                                <th scope="col">Poster</th>
                                <td><img src={titulo.Poster} alt={titulo.Title} height="100px" width="100px"/></td>
                            </tr></table>)}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}