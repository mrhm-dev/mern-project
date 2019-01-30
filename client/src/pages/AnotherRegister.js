import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Form, Button, Alert } from "reactstrap";

import TextInput from "../components/forms/TextInput";
import registerValidator from "../validators/registerValidator";
import { register } from "../store/actions/authActions";

class AnotherRegister extends React.Component {
  state = {
    name: {
      value: "",
      touched: false
    },
    email: {
      value: "",
      touched: false
    },
    password: {
      value: "",
      touched: false
    },
    confirmPassword: {
      value: "",
      touched: false
    },
    error: {}
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
  //     return {
  //       error: nextProps.error
  //     };
  //   }
  //   return null
  // }

  changeHandler = event => {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        value: event.target.value
      }
    });
  };

  focusHandler = event => {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        touched: true
      }
    });
  };

  blurHandler = event => {
    let error = registerValidator(this.state);
    if (Object.keys(error).length > 0) {
      this.setState({ error });
    } else {
      this.setState({ error: {} });
    }
  };

  submitHandler = event => {
    event.preventDefault();
    let { name, email, password, confirmPassword } = this.state;
    this.props.register({
      name: name.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value
    });
  };

  render() {
    let { name, email, password, confirmPassword, error } = this.state;
    return (
      <Container className="my-5">
        <Row>
          <Col md={{ size: 6, offset: 3 }}>
            <h3>Create Your New Account</h3>
            <Form onSubmit={this.submitHandler}>
              <TextInput
                name="name"
                label="What is Your Name"
                placeholder="Enter Your Name"
                value={name.value}
                error={name.touched ? error.name : ""}
                changeHandler={this.changeHandler}
                blurHandler={this.blurHandler}
                focusHandler={this.focusHandler}
              />
              <TextInput
                name="email"
                type="email"
                label="What is Your Email"
                placeholder="Enter Your Email"
                value={email.value}
                error={email.touched ? error.email : ""}
                changeHandler={this.changeHandler}
                blurHandler={this.blurHandler}
                focusHandler={this.focusHandler}
              />
              <TextInput
                name="password"
                type="password"
                label="What is Your Name"
                placeholder="Enter Your Password"
                value={password.value}
                error={password.touched ? error.password : ""}
                changeHandler={this.changeHandler}
                blurHandler={this.blurHandler}
                focusHandler={this.focusHandler}
              />
              <TextInput
                type="password"
                name="confirmPassword"
                label="Recheck Your Password"
                placeholder="Confirm Your Password"
                value={confirmPassword.value}
                error={confirmPassword.touched ? error.confirmPassword : ""}
                changeHandler={this.changeHandler}
                blurHandler={this.blurHandler}
                focusHandler={this.focusHandler}
              />
              <Button color="primary"> Register </Button>
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
  error: state.error
});

export default connect(
  mapStateToProps,
  { register }
)(AnotherRegister);
