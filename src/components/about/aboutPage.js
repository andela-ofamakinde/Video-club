"use strict";

var React = require('react');

var About = React.createClass({
  render: function() {
    return (
      <div>
        <h1>About Us </h1>
        <p>
          The app offers the following features
          <ol>
            <li>Socia media for bing movie watchers</li>
            <li>Add your fave movies</li>
            <li>Spin up a thread of conversation about it</li>
            <li>Rate your Fave movies</li>
            <li>See those who enjoyed it too</li>
            <li>Everyone cheks your reviews before they watch movies</li>
          </ol>
        </p>
      </div>
    );
  }
});

module.exports = About;