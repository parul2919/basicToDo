import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component{
    render(){
        return (
            <footer className="bg-info p-3">
                <Row>
                <Col xs="6" sm="4">@copyright reserved</Col>
                <Col xs="6" sm="4">React || Redux || Bootstrap</Col>
                <Col sm="4">ToDOAPP</Col>
                </Row>
            </footer>
        )
    }
}
export default Footer;
