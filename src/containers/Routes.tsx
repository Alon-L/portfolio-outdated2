import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/pages/home/Home';

class Routes extends Component {
  render() {
    return (
      <main>
        <div className="page-wrapper">
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
      </main>
    );
  }
}

export default Routes;
