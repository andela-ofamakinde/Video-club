"use strict";

var React = require('react');
var Router = require('react-router');
var MovieForm = require('./movieForm');
var MovieApi = require('../../api/movieApi');
var toastr = require('toastr');

var ManageMoviePage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function(transition, component) {
      if (component.state.dirty && !confirm('Leave without saving')) {
        transition.abort();
      }
    }
  },

  getInitialState: function() {
    return {
      movie: { id: '', title: '', director: '', ratings: '' },
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function() {
    var movieId = this.props.params.id;
    if (movieId) {
      this.setState({movie: MovieApi.getMovieById(movieId)});
    }
  },

  setMovieState: function(event) {
    this.setState({dirty: true});

    var field = event.target.name;
    var value = event.target.value;
    this.state.movie[field] = value;
    return this.setState({movie: this.state.movie});
  },

  movieFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {};

    if (!this.state.movie.director.length) {
      this.state.errors.director = "Director's name is required";
      formIsValid = false;
    }

    if (!this.state.movie.title.length) {
      this.state.errors.title = "Movie title is required";
      formIsValid = false;
    }

    if (!this.state.movie.ratings.length) {
      this.state.errors.ratings = "Invalid rating";
      formIsValid = false;
    }

    this.setState({errors: this.state.errors});

    return formIsValid;
  },

  saveMovie: function(event){
    event.preventDefault();

    if(!this.movieFormIsValid()) {
      return;
    }

    MovieApi.saveMovie(this.state.movie);

    this.setState({dirty: false});
    toastr.success('Movie Saved');
    this.transitionTo('movies');
  },

  render: function() {
    return (
      <MovieForm 
        movie={this.state.movie}
        onChange={this.setMovieState} 
        onSave={this.saveMovie} 
        errors={this.state.errors} />
    );
  }
});

module.exports = ManageMoviePage;
