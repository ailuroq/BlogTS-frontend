import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {rootReducer} from "./reducers/rootReducer";
import thunk from 'redux-thunk'
import {articleReducer} from "./reducers/articleReducer";

const store = createStore(articleReducer, composeWithDevTools(
    applyMiddleware(thunk)
));
export default store