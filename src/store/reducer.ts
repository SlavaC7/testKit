import {authReducer} from './auth/reducer';
import {combineReducers} from '@reduxjs/toolkit';
import { hotelReducer } from './hotel';

export default combineReducers({
  auth: authReducer,
  hotel: hotelReducer,
});
