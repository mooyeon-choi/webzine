import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo-nav">
          <img className="team-logo" src="https://raw.githubusercontent.com/mooyeon-choi/webzine/f03c7d3a91b7ebaa159c62df092a4cca56cb6ab4/public/images/team-logo.svg" alt="team-logo"/>
        </div>
        <img src="https://github.com/mooyeon-choi/webzine/blob/main/public/images/title-logo.png?raw=true"  alt="logo" className="navbar-logo"/>
        <div className="menus">
          <div className="menu-icon">
            <i className="fas fa-bars"></i>
          </div>
          <div>
            <a className="button" href="https://www.sknewcomer.com/">SK academy</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;