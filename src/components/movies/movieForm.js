"use strict";

var React = require('react');
var Input = require('../common/textInput');

var MovieForm = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired,
    error: React.PropTypes.object
  },

  render: function() {
    return (
      <form>
        <h1>Manage Movies</h1>
        <Input 
          name="title"
          label="Movie Title"
          onChange={this.props.onChange}
          value={this.props.movie.title}
          error={this.props.errors.title} />

        <Input 
          name="director"
          label="Movie Director"
          onChange={this.props.onChange}
          value={this.props.movie.director} 
          error={this.props.errors.director}/>

        <Input 
          name="ratings"
          label="Movie Ratings"
          onChange={this.props.onChange}
          value={this.props.movie.ratings}
          error={this.props.errors.ratings} />

        <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave}/>
      </form>
    );
  }
});

module.exports = MovieForm;
