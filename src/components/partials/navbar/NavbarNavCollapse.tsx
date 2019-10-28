import React, { Component } from 'react';

class NavbarNavCollapse extends Component {
  render() {
    return (
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    );
  }
}

export default NavbarNavCollapse;