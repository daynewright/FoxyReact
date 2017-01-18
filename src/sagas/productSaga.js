import { take, call, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/actionCreators';
import * as a from '../action/actionTypes';
import { browserHistory } from 'react-router';

function* getSingleProduct(id) {
    const url = `http://api.giphy.com/v1/search?q=${id}&api_key=dc6zaTOxFJmzC`;

    try {
        const { data } = yield call(axios, url);
        yield put(actions.getSingleProductSuccess(data));
    } catch(error) {
        yield put(actions.getSingleProductFailure(error));
    }
}

export function* getProduct() {
    yield* takeEvery(actions.GET_SINGLE_PRODUCT);
}

