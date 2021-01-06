import axios from '../axios/axios'
import {ADD_ARTICLE, GET_ARTICLES} from "../constants/articleConstants";

const _addArticle = (article) => ({
    type: ADD_ARTICLE,
    article
})

export const addArticle = (articleData = {
    title: '',
    content: '',
    numberOfWords: 0,
    date: '',
    author: ''
}) => {
    return (dispatch) => {
        const article = {
            title: articleData.title,
            content: articleData.content,
            numberOfWords: articleData.numberOfWords,
            author: articleData.author,
            date: articleData.date,
        }
        return axios.post('article/create', article).then(result => {
            dispatch(_addArticle(result.data))
        })
    }
}

const _getArticles = (articles) => ({
    type: GET_ARTICLES,
    articles
})

export const getArticles = () => {
    return (dispatch) => {
        return axios.get('alex/articles').then(result => {
            const articles = []
            result.data.forEach((item) => {
                articles.push(item)
            })
            dispatch(_getArticles(articles))
        })
    }
}