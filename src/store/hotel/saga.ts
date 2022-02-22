import {RootState} from '../types';
import {takeLatest, select, put} from '@redux-saga/core/effects';
import axios, { AxiosError } from 'axios';
import {default_api} from '../../constants';
import {TInitialState} from '../auth/types';
import { getHoletListResponse, getRoomHotelResponse, HoletInfResponse, resultSellRoomResponse, roomInfoResponse } from './types';
import { getHotelAction, getHotelListAction, getRoomAction, getRoomInfoAction, sendSellRoomAction } from './action';



function* getMyProfileWorker({
  payload:{}
}: ReturnType<typeof getHotelListAction['request']>){
  const url = `${default_api.api}/hotel/list`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:getHoletListResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(getHotelListAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* getHotelInfWorker({
  payload:{id}
}: ReturnType<typeof getHotelAction['request']>){
  const url = `${default_api.api}/hotel/info/${id}`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:HoletInfResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(getHotelAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* getRoomWorker({
  payload:{id}
}: ReturnType<typeof getRoomAction['request']>){
  const url = `${default_api.api}/room/${id}/list`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:getRoomHotelResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(getRoomAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* getRoomInfoWorker({
  payload:{id}
}: ReturnType<typeof getRoomInfoAction['request']>){
  const url = `${default_api.api}/room/${id}`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:roomInfoResponse} = yield axios.get(url,{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(getRoomInfoAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

function* sellRoomWorker({
  payload:{id}
}: ReturnType<typeof sendSellRoomAction['request']>){
  const url = `${default_api.api}/room/order`;
  console.log(url);
  const token: TInitialState['token'] = yield select(
    (state: RootState) => state.auth.token,
  );
  try{
    const response: {data:resultSellRoomResponse} = yield axios.post(url,{id},{headers: {Authorization: `Bearer ${token}`}});
    console.log('Reg: ', response);
    yield put(sendSellRoomAction.success(response.data));
    yield put(getRoomAction.request(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}



export function* hotelWatcher() {
  yield takeLatest(getHotelListAction.request, getMyProfileWorker);
  yield takeLatest(getHotelAction.request, getHotelInfWorker);
  yield takeLatest(getRoomAction.request, getRoomWorker);
  yield takeLatest(getRoomInfoAction.request, getRoomInfoWorker);
  yield takeLatest(sendSellRoomAction.request, sellRoomWorker);
}
