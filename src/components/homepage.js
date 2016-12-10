"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Video Club</h1>
        <p>Lets talk about the movies we love to watch</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
      </div>
    );
  }
});

module.exports = Home;
