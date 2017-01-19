import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    routing: routerReducer
});

export default rootReducer;