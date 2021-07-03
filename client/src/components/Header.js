import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import LoginModal from './LoginModal/index';

import { Navbar, Nav, Button } from 'react-bootstrap';

class Header extends React.Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button variant="dark" onClick={this.handleShow}>
            Sign up
          </Button>
        );
      default:
        return (
          <Button variant="dark" href="/api/logout">
            Logout
          </Button>
        );
    }
  }

  render() {
    return (
      <div>
        <LoginModal show={this.state.show} handleClose={this.handleClose} />
        <Navbar bg="dark" variant="dark">
          <Nav className="container-fluid">
            <Nav.Item>
              <Navbar.Brand as={Link} to="/">
                Home
              </Navbar.Brand>
            </Nav.Item>
            <Nav.Item className="ml-auto">
              <Nav.Link as="li">{this.renderContent()}</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
