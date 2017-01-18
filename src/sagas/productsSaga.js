import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/actionCreators';
import { browserHistory } from 'react-router';

function* getAllProducts() {
    // dev environment API key from: https://github.com/Giphy/GiphyAPI
    const url = `http://api.giphy.com/v1/search?q=electronics&api_key=dc6zaTOxFJmzC`;

    try {
        const { data } = yield call(axios, url);
        yield put(actions.getAllProductsSuccess(data));
    } catch(error) {
        yield put(actions.getAllProductsFailure(error));
        browserHistory.push(`/404/`);
    }
}

export function* watchGetProducts() {
    yield* takeEvery(actions.GET_PRODUCTS, getAllProducts);
}