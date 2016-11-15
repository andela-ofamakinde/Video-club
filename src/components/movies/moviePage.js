"use strict";

var React = require('react');
var MovieApi = require('../../api/movieApi');

var Movies = React.createClass({
  getInitialState: function() {
    return {
      movies: []
    };
  },

  componentWillMount: function() {
    this.setState({movies: MovieApi.getAllMovies()});
  },

  render: function () {
    var createMovieRow = function(movie) {
      return (
        <tr key={movie.id}>
          <td>
            <a href={"/#movies/" + movie.id}>{movie.id}</a>
          </td>
          <td>{movie.title} {movie.director}</td>
        </tr>
      );
    };

    return (
      <div>
        <h1>Movies</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Title</th>
          </thead>
          <tbody>
            {this.state.movies.map(createMovieRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Movies;