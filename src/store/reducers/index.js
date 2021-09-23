import { combineReducers } from 'redux';
import TestReducer from './testReducers';

const reducers = combineReducers({
  testReducer: TestReducer,
});

export default reducers;