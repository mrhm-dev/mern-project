import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AnotherRegister from "../pages/AnotherRegister";
import RegistrationSuccessful from "../pages/RegistrationSuccessful";
import ActivationPage from "../pages/ActivationPage";
import CreateQuiz from '../pages/CreateQuiz'

import TopNavbar from './navbar/TopNavbar'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <TopNavbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/another-register" component={AnotherRegister} />
            <Route path="/registration-success" component={RegistrationSuccessful} />
            <Route path="/activateaccount/:token" component={ActivationPage} />
            <Route path='/quiz/create' component={CreateQuiz} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;

