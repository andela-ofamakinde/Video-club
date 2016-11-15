"use strict";

var React = require('react');

var Header = React.createClass({
  render: function() {
    var spacing = -10;
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li>
                  <div style={{marginTop: spacing}}>
                    <a className="navbar-brand" href="/">
                      <img alt="Brand" src="images/logo.png" />
                    </a>
                  </div>
                </li>
                <li><a href="/">Home</a></li>
                <li><a href="/#movies">Movies</a></li>
                <li><a href="/#about">About</a></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
