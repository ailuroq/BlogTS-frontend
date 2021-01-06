import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import styles from "./Header.module.css"
import telegram from '../../static/telegram_PNG18.png'
import github from '../../static/GitHub-Mark-120px-plus.png'
import mail from '../../static/mail.png'
import {NavLink} from "react-router-dom";
const Nav = () => {
    return (
        <div className="nav">
            <Container>
                <Row className="justify-content-center">
                    <ul className={styles.nav}>
                        <li className={styles.icon}>
                            <a href="#">
                                <img src={github} alt="Github"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a href="#">
                                <img src={mail} alt="Email"/>
                            </a>
                        </li>
                        <li className={styles.icon}>
                            <a href="#">
                                <img src={telegram} alt="Telegram"/>
                            </a>
                        </li>
                    </ul>
                </Row>
                <Row className="justify-content-center">
                    <ul className={styles.menu}>
                        <li className={styles.menu_item}><NavLink to="/">Home</NavLink></li>
                        <li className={styles.menu_item}><NavLink to="about-me">About Me</NavLink></li>
                        <li className={styles.menu_item}><NavLink to="#">Best</NavLink></li>
                        <li className={styles.menu_item}><NavLink to="#">All</NavLink></li>
                        <li className={styles.menu_item}><NavLink to="#">Pets</NavLink></li>
                        <li className={styles.menu_item}><NavLink to="#">Trainings</NavLink></li>
                    </ul>
                </Row>
            </Container>
        </div>
    );
}

export default Nav;
