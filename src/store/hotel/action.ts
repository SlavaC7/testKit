import {createActionTypes, createApiActions} from '../rootActions';

import {AxiosError} from 'axios';
import {Empty} from '../types';
import { 
  getHoletListResponse, 
  getRoomHotelResponse, 
  HoletInfResponse, 
  IdHotelResponse, 
  resultSellRoomResponse, 
  roomInfoResponse 
} from './types';


export const getHotelListAction = createApiActions<
  Empty,
  getHoletListResponse,
  Empty
>(createActionTypes('HOTEL/LIST'));

export const getHotelAction = createApiActions<
  IdHotelResponse,
  HoletInfResponse,
  Empty
>(createActionTypes('HOTEL/INFO'));

export const getRoomAction = createApiActions<
  IdHotelResponse,
  getRoomHotelResponse,
  Empty
>(createActionTypes('HOTEL/ROOM'));

export const getRoomInfoAction = createApiActions<
  IdHotelResponse,
  roomInfoResponse,
  Empty
>(createActionTypes('ROOM/INFO'));

export const sendSellRoomAction = createApiActions<
  IdHotelResponse,
  resultSellRoomResponse,
  Empty
>(createActionTypes('ROOM/SELL'));

export const clearAction = createApiActions<
  Empty,
  Empty,
  Empty
>(createActionTypes('HOTEL/CLEAR'));