import React from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { setToastMessage } from '../store/actions/metaActions'

class Home extends React.Component {
    componentDidMount() {
        let { toastMessage } = this.props.meta
        if (toastMessage) {
            toast.success(toastMessage, {
                position: toast.POSITION.TOP_RIGHT,
                onClose: () => this.props.setToastMessage()
            })
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Card>
                            <ToastContainer />
                            <CardBody>
                                <p className='lead'>
                                    I Am HoMe Page
                            </p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }


}

const mapStateToProps = state => ({
    meta: state.meta
})

export default connect(mapStateToProps, {setToastMessage})(Home)