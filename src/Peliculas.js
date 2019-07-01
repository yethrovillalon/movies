import React from 'react';
import Button from 'react-bootstrap/Button';

const Peliculas = ({ movies }) => {
    return (
      <div class="table-responsive">
        {movies.map((movie) => (
            <table class="table">
              <thead>
                <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Anio</th>
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
                <tr>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Runtime}</td>
                <td>{movie.Genre}</td>
                <td>{movie.Director}</td>
                <td>{movie.Language}</td>
                <td>{movie.Country}</td>
                <td>{movie.Type}</td>
                <td>{movie.Production}</td>
                <td>Poner el boton</td>
                </tr>
              </tbody>
            </table>
        ))}
      </div>
    )
  };
  
  export default Peliculas