import React, { Component } from 'react';
import HomeScene from './HomeScene';
import { Col, Container, Row } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <HomeScene/>
        <Container>
          <Row className="position-relative justify-content-center">
            <h2 className="home-title position-relative font-bolder color-white text-center text-uppercase">
              Alon Livne
            </h2>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Home;
