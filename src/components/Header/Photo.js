import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import resumePhoto from '../../static/resumePhoto.png'
import styles from './Header.module.css'

const Photo = () => {
    return (
        <div className={styles.photo}>
            <Row>
                <Col>
                    <a href="#" className={styles.sub}><p>Subscribe</p></a>
                    <img src={resumePhoto} alt="#"/>
                </Col>
            </Row>
        </div>
    );
}

export default Photo;
