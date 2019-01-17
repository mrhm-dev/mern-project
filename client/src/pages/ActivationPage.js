import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setToastMessage } from "../store/actions/metaActions";
import { activateAccount } from "../store/actions/authActions";

class ActivationPage extends React.Component {
  componentDidMount() {
    let { token } = this.props.match.params;
    this.props.activateAccount(token);

    let { toastMessage } = this.props.meta;
    if (toastMessage) {
      toast.success(toastMessage, {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => this.props.setToastMessage()
      });
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            {this.props.meta.isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <Card>
                <ToastContainer />
                <CardBody>
                  <p className="lead">
                    'Account Activated Successfully. Now You can Login to Your
                    Account.'
                    <Link to="/login"> Login </Link>
                  </p>
                </CardBody>
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meta: state.meta
});

export default connect(
  mapStateToProps,
  { setToastMessage, activateAccount }
)(ActivationPage);
