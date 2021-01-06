import {ADD_ARTICLE, GET_ARTICLES} from "../constants/articleConstants";

const articlesReducerDefaultState = []

export const articleReducer = (state = articlesReducerDefaultState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return [
                ...state, action.article
            ]
        case GET_ARTICLES:
            return action.articles
        default:
            return state
    }
}

