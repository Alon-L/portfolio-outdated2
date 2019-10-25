import React, { Component } from 'react';
import Routes from './containers/Routes';

class App extends Component {
  render() {
    return (
      <div className="wrapper flex">
        <Routes/>
      </div>
    );
  }
}

export default App;
