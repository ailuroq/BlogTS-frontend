import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

const Photo = () => {
    return (
        <div className="photo">
            <Row className="justify-content-center">
                <Col md={{span:6, offset:4}}>
                    <p><a href="#">Subscribe</a></p>
                    <img src="#" alt="#"/>
                </Col>
            </Row>
        </div>
    );
}

export default Photo;
