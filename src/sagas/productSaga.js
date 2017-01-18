import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/actionCreators';
import { browserHistory } from 'react-router';

function* getSingleProduct(id) {
    const url = `http://api.giphy.com/v1/search?q=${id}&api_key=dc6zaTOxFJmzC`;

    try {
        const { data } = yield call(axios, url);
        yield put(actions.getSingleProductSuccess(data));
    } catch(error) {
        yield put(actions.getSingleProductFailure(error));
        browserHistory.push(`/404/`);
    }
}

export function* getProduct() {
    yield* takeEvery(actions.GET_SINGLE_PRODUCT, getSingleProduct);
}

