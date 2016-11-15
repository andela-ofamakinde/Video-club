"use strict";

var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Video Club</h1>
        <p>Lets talk about the movies we love to watch</p>
      </div>
    );
  }
});

module.exports = Home;