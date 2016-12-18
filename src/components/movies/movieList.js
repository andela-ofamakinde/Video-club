"use strict";

var React = require('react');
var Router = require('react-router');
var MovieActions = require('../../actions/movieActions');
var toastr = require('toastr');

var Link = Router.Link;

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired
  },

  deleteMovie: function(id, event) {
    event.preventDefault();
    MovieActions.deleteMovie(id);
    toastr.success("Movie Deleted");
  },

  render: function () {
    var createMovieRow = function(movie) {
      return (
        <tr key={movie.id}>
          <td><Link to='manageMovies' params={{id: movie.id}}>{movie.id}</Link></td>
          <td>{movie.title}</td>
          <td>{movie.director}</td>
          <td>{movie.ratings}</td>
          <td><a href="#" onClick={this.deleteMovie.bind(this, movie.id)}>Delete</a></td>
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
            <th></th>
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