import { take, fork, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/actionTypes';
import * as actionCreators from '../actions/actionCreators';
import { browserHistory } from 'react-router';

function* getAllProducts() {
    // dev environment API key from: https://github.com/Giphy/GiphyAPI
    const url = `http://api.giphy.com/v1/gifs/search?q=cats&limit=51&api_key=dc6zaTOxFJmzC`;

    try {
        const { data } = yield call(axios, url);
        yield put(actionCreators.getAllProductsSuccess(data));
    } catch(error) {
        yield put(actionCreators.getAllProductsFailure(error));
        browserHistory.push(`/404/`);
    }
}

// export function* watchGetProducts() {
//     yield* takeEvery(actions.GET_PRODUCTS, getAllProducts);
// }

export function* watchGetProducts() {
    while(true) {
        const { payload } = yield take(actions.GET_PRODUCTS);
        yield fork(getAllProducts, payload); 
    }
}