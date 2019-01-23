import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Alert } from "reactstrap";

import TextInput from "../components/forms/TextInput";
import { register } from "../store/actions/authActions";

class Register extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: {}
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
      return {
        error: nextProps.error
      };
    }
    return null;
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    let { name, email, password, confirmPassword } = this.state;
    this.props.register({
      name,
      email,
      password,
      confirmPassword
    }, this.props.history);
  };

  render() {
    let { name, email, password, confirmPassword, error } = this.state;
    return (
      <Container className="my-5">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h3>Create Your New Account</h3>
            <Form onSubmit={this.submitHandler}>
              <fieldset disabled={this.props.meta.isLoading}>
              <TextInput
                name="name"
                label="What is Your Name"
                placeholder="Enter Your Name"
                value={name}
                error={error.name}
                changeHandler={this.changeHandler}
              />
              <TextInput
                name="email"
                type="email"
                label="What is Your Email"
                placeholder="Enter Your Email"
                value={email}
                error={error.email}
                changeHandler={this.changeHandler}
              />
              <TextInput
                name="password"
                type="password"
                label="What is Your Name"
                placeholder="Enter Your Password"
                value={password}
                error={error.password}
                changeHandler={this.changeHandler}
              />
              <TextInput
                type="password"
                name="confirmPassword"
                label="Recheck Your Password"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                error={error.confirmPassword}
                changeHandler={this.changeHandler}
              />
                <Button color="primary"> Register </Button>
              </fieldset>
              <Link to='/login'> Already Have Account? Login Now </Link>
              
            </Form>
            {Object.keys(error).length > 0 && (
              <Alert color="danger" className="my-4">
                <ul>
                  {Object.keys(error).map(err => {
                    return <li key={err}> {error[err]} </li>;
                  })}
                </ul>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  meta: state.meta
});

export default connect(
  mapStateToProps,
  { register }
)(withRouter(Register))
