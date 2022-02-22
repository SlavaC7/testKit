import {all} from 'redux-saga/effects';
import {authWatcher} from './auth';
import { hotelWatcher } from './hotel';

function* rootSaga() {
  yield all([authWatcher(),hotelWatcher()]);
}

export default rootSaga;
