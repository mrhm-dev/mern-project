import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { logout } from '../../store/actions/authActions'

const LoginedNavbar = props => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink tag={Link} to="/dashboard">
        Dashboard
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink tag={Link} to="/profile">
        Profile
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink style={{cursor: 'pointer'}} onClick={() => props.logout(props.history)}>
        Logout
      </NavLink>
    </NavItem>
  </Nav>
);

export default connect(null, {logout})(withRouter(LoginedNavbar));
