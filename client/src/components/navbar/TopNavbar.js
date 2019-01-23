import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand
} from "reactstrap";
import { connect } from 'react-redux'

import LoginedNavbar from './LoginedNavbar'
import NotLoginedNavbar from './NotLoginedNavbar'

class TopNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MERN Project</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.props.auth.isAuthenticated ? <LoginedNavbar /> : <NotLoginedNavbar /> }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(TopNavbar);
