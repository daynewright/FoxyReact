import { fork } from 'redux-saga/effects';
import { watchGetProducts } from './productsSaga';


function startSagas(...sagas) {
  return function* rootSaga() {
    yield sagas.map(saga => fork(saga));
  };
}

const rootSaga = startSagas(
    watchGetProducts
);

export default rootSaga;

