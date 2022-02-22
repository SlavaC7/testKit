import {RootState} from './../types';
import {
  signinAction,
  registerAction,
} from './action';
import {takeLatest, select, put} from '@redux-saga/core/effects';
import {RegisterActionResponse, RegisterType, SigninActionResponse, TInitialState} from './types';
import axios, { AxiosError } from 'axios';
import {default_api} from '../../constants';

function* signinWorker({
  payload: {login, password},
}: ReturnType<typeof signinAction['request']>) {
  const url = `${default_api.api}/auth/login`;
  console.log(url);
  try {
    const response: SigninActionResponse = yield axios.post(url, {login,password});
    console.log(
      'Sign in: ',
      //@ts-ignore
      response,
    );

    yield put(
      signinAction.success(
        //@ts-ignore
        response.data,
      ),
    );
  } catch (e:any) {
    console.log({...e});
  }
}
function* registerWorker({
  payload:{login, userName, password}
}: ReturnType<typeof registerAction['request']>){
  const url = `${default_api.api}/auth/register`;
  console.log(url);
  try{
    const response: {data:RegisterActionResponse} = yield axios.post(url, {login,userName,password});
    console.log('Reg: ', response);
    yield put(registerAction.success(response.data));
  }
  catch (e:any) {
    console.log({...e});
  }
}

export function* authWatcher() {
  yield takeLatest(signinAction.request, signinWorker);
  yield takeLatest(registerAction.request, registerWorker);
}
