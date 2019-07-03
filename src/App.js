import React, { Component } from 'react';
import groupon from './groupon-logo.png';
import peliculas from './movies.png';
import './App.css';
import {Gridmovies} from "./components/Gridmovies";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  handleChange = (event) => {
    event.preventDefault(); // Puede o no puede ser necesario dependiendo de lo que esté haciendo
    
    const { value } = event.target;
    const endpoint = 'http://www.omdbapi.com/?i=tt3896198&apikey=21dee529&t='+value;

    if(value != ""){
      fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ todos: data })
        console.log(this.state.todos)
      });
    }else{
      this.setState({ todos: [] })
    }
  }

  render() {
    var pelis = {
      Title: [this.state.todos]
    };
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
        </p>
        <p className="App-text" class="font-weight-bold">
          &nbsp;Listado Peliculas
        </p>
        <div className="container">
            <div className="row">
                <Gridmovies pelis={pelis}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
