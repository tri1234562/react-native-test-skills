import { all, takeLatest } from 'redux-saga/effects';
import { INCREASE_DATA_REQUEST, DECREASE_DATA_REQUEST, RESET_DATA_REQUEST } from '../actionsType';
import testReduxMiddleware from './testMiddlewareSaga'

function* testChangeData() {
  yield takeLatest(INCREASE_DATA_REQUEST, testReduxMiddleware.handleUpdateData);
}

function* handleDecreaseCount() {
  yield takeLatest(DECREASE_DATA_REQUEST, testReduxMiddleware.handleDecreaseCount);
}

function* handleResetCount() {
  yield takeLatest(RESET_DATA_REQUEST, testReduxMiddleware.handleResetCount);
}

export default function* rootSaga() {
  yield all([
    testChangeData(),
    handleDecreaseCount(),
    handleResetCount(),
  ])
}
 