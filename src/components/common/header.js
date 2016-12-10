"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

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
                    <Link to='app' className="navbar-brand">
                      <img alt="Brand" src="images/logo.png" />
                    </Link>
                  </div>
                </li>
                <li><Link to='app'>Home</Link></li>
                <li><Link to='movies'>Movies</Link></li>
                <li><Link to='about'>About</Link></li>
              </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
