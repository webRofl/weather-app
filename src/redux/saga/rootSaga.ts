import { all } from 'redux-saga/effects';
import { locationWatcher } from './locationSaga';
import { weatherWatcher } from './weatherSaga';

function* rootWatcher() {
  yield all([locationWatcher(), weatherWatcher()]);
}

export default rootWatcher;
