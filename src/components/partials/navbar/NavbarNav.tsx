import React, { Component } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import NavbarNavCollapse from './NavbarNavCollapse';

interface State {
  open: boolean;
}

class NavbarNav extends Component<{}, State> {
  state: State = {
    open: false
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light position-fixed fixed-top bg-transparent p-3">
        <Button
          className="navbar-toggler"
          onClick={() => this.setState(state => ({ open: !state.open }))}
          aria-controls="navbarSupportedContent"
          aria-expanded={this.state.open}
        >
          <span className="navbar-toggler-icon"/>
        </Button>
        <Collapse in={this.state.open}>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarNavCollapse/>
          </div>
        </Collapse>
      </nav>
    );
  }
}

export default NavbarNav;