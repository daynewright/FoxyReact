import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import productReducer from './productReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    product: productReducer,
    routing: routerReducer
});

export default rootReducer;