import { fork } from 'redux-saga/effects';
import { watchGetProducts } from './productsSaga';
import { watchGetProduct } from './productSaga';


function startSagas(...sagas) {
    return function* rootSaga() {
      yield sagas.map(saga => fork(saga));
    };
}

const rootSaga = startSagas(
    watchGetProducts,
    watchGetProduct
);

export default rootSaga;

