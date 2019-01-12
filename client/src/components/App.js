import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
