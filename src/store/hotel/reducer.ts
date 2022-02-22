
import {createReducer} from '@reduxjs/toolkit';
import { 
  clearAction,
  getHotelAction, 
  getHotelListAction, 
  getRoomAction, 
  getRoomInfoAction, 
  sendSellRoomAction
} from './action';
import {TInitialState} from './types';


const InitialState: TInitialState = {
  hotelList:[],
  hotelInf:null,
  roomlist:[],
  roomInfo:null,
  result:null,
};

export const hotelReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
     builder.addCase(getHotelListAction.success, (state, {payload}) => ({
       ...state,
       hotelList:payload,
     }));
     builder.addCase(getHotelAction.success, (state, {payload}) => ({
      ...state,
      hotelInf:payload,
    }));
    builder.addCase(getRoomAction.success, (state, {payload}) => ({
      ...state,
      roomlist:payload,
      
    }));
    builder.addCase(getRoomInfoAction.success, (state, {payload}) => ({
      ...state,
      roomInfo:payload,
      result:null,
    }));
    builder.addCase(sendSellRoomAction.success, (state, {payload}) => ({
      ...state,
      result:payload,
    }));
    builder.addCase(clearAction.success, (state, {payload}) => ({
      ...state,
      result:null,
    }));
  },
);
