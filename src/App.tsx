import React, { Component } from 'react';
import Routes from './containers/Routes';
import NavbarNav from './components/partials/navbar/NavbarNav';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarNav/>
        <Routes/>
      </React.Fragment>
    );
  }
}

export default App;
