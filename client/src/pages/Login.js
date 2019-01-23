import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button, Alert } from "reactstrap";

import TextInput from "../components/forms/TextInput";
import { login } from "../store/actions/authActions";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
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
      this.props.login({
          email: this.state.email,
          password: this.state.password
    }, this.props.history)
  };

  render() {
    let { email, password, error } = this.state;
    return (
      <Container className="my-5">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h3>Login to Your Account</h3>
            <Form onSubmit={this.submitHandler}>
              <fieldset disabled={this.props.meta.isLoading}>
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
                <Button color="primary"> Login </Button>
                        </fieldset>
                <Link to='/register'> Don't Have Account? Register Now </Link>
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
  { login }
)(withRouter(Login))
