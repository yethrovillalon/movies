import React, { Component } from 'react';
import groupon from './groupon-logo.png';
import peliculas from './movies.png';
import './App.css';
import Movies from './Peliculas.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      todos: [],
      show: false
    }
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  /*componentDidMount() {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=21dee529&t=')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }*/

  handleChange = (event) => {
    event.preventDefault(); // Puede o no puede ser necesario dependiendo de lo que esté haciendo
    
    const { value } = event.target;
    const endpoint = 'http://www.omdbapi.com/?i=tt3896198&apikey=21dee529&t='+value;
  
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ todos: data })
        console.log(this.state.todos)
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={groupon} className="App-groupon" alt="groupon" aling="left"/>
          <img src={peliculas} className="App-movies" alt="movies" />
        </div>
        <p className="App-intro">
          &nbsp;
        </p>
        <form class="form-inline md-form form-sm active-pink-2" onSubmit={(e) => this.handleSubmit(e)}>
            &nbsp;&nbsp;<input
            class="form-control form-control-sm"
            type='text'
            placeholder='Busqueda'
            value={ this.state.Title }
            onChange={this.handleChange} />
        </form>
        <p className="App-intro">
          &nbsp;
          <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                  </Button>
        </p>
        <p className="App-text" class="font-weight-bold">
          &nbsp;Listado Peliculas
        </p>
        <Movies movies={[this.state.todos]} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
