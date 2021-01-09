import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from '../Articles.module.css'
import {AVERAGE_READ_SPEED} from "../../../redux/constants/articleConstants";
import {NavLink} from "react-router-dom";
/*title, content, numberOfWords, date, author*/
const Article = props => {
    return (
        <div className={styles.article}>
            <Row className="justify-content-center text-wrap">
                <h1 className={styles.title}><NavLink to={'/'+props.id}>{props.title}</NavLink></h1>
                <ul className={styles.shortInfo}>
                    <li>{props.date}</li>
                    <li>{props.numberOfWords} words</li>
                    <li>{Math.ceil(props.numberOfWords/AVERAGE_READ_SPEED)} minutes to read</li>
                </ul>
                <p>content {props.content}</p>
                <br/>
            </Row>
        </div>
    );
}

export default Article;
