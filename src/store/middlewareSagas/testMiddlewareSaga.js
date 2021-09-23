import { put } from 'redux-saga/effects';
import {
  increaseCompleteAction,
  decreaseCompleteAction,
  resetCountCompleteAction,
} from '../actions';

function* handleUpdateData(data) {
  try {
    console.log('action INCREASE_DATA_SUCCESS run', data);
    yield put(increaseCompleteAction(data.payload));
  } catch (error) {}
}

function* handleDecreaseCount(data) {
  try {
    console.log('action DECREASE_DATA_SUCCESS run');
    yield put(decreaseCompleteAction(data.payload));
  } catch (error) {}
}

function* handleResetCount(data) {
  try {
    console.log('action RESET_DATA_SUCCESS run', data);
    yield put(resetCountCompleteAction(data.payload));
    ß;
  } catch (error) {}
}

const testReduxMiddleware = {
  handleUpdateData,
  handleDecreaseCount,
  handleResetCount,
};

export default testReduxMiddleware;
