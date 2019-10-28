import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/pages/home/Home';

class Routes extends Component {
  render() {
    return (
      <main>
        <div className="content d-flex flex-column justify-content-center">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </main>
    );
  }
}

export default Routes;
