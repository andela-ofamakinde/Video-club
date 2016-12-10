"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  render: function () {
    var createMovieRow = function(movie) {
      return (
        <tr key={movie.id}>
          <td><Link to='manageMovies' params={{id: movie.id}}>{movie.id}</Link></td>
          <td>{movie.title}</td>
          <td>{movie.director}</td>
          <td>{movie.ratings}</td>
        </tr>
      );
    };

    return (
      <div>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Title</th>
            <th>Director</th>
            <th>Ratings</th>
          </thead>
          <tbody>
            {this.props.movies.map(createMovieRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = MovieList;
