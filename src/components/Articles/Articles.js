import React, {useEffect} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {getArticles} from "../../redux/actions/articles";
import store from "../../redux/store";
import {connect} from "react-redux";
import Article from "./Article/Article";
import styles from './Articles.module.css'
const Articles = (props) => {
    useEffect(() => {
        store.dispatch(getArticles())
        console.log(props)
    }, [])
    return (
        <div className="posts">
            <Row className="justify-content-center">
                <Col>
                        <ul className={styles.articles}>
                            {
                                props.articles.map(article=>{
                                return (
                                    <li key={article.id}>
                                        <Article {...article}/>
                                    </li>
                                )
                            })}
                        </ul>
                </Col>
            </Row>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        articles: state
    }
}

export default connect(mapStateToProps)(Articles)
