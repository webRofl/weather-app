import { GlobalState } from './../store';
import {
  SetTownAction,
  SetCoordAction,
  SetLangAction,
} from './../types/locationReducerTypes';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  select,
  SelectEffect,
  takeEvery,
} from 'redux-saga/effects';
import { GetTownCoordinates, getWeatherInfo } from '../../api/api';
import {
  GET_TOWN_ASYNC,
  SET_LANG_ASYNC,
} from '../actionTypes/locationReducerActionTypes';
import { setCoord, setLang, setTown } from '../reducers/locationReducer';
import { getWeather } from '../reducers/weatherReducer';
import { GetWeatherAction } from '../types/weatherReducerTypes';

type GetTownWorkerAction = {
  town: string;
};

type ResponseGetTown = {
  status: number;
  lat: number;
  lon: number;
  lang: string;
};

function* getTownWorker(
  action: GetTownWorkerAction
): Generator<
  | CallEffect<GetTownCoordinates>
  | PutEffect<SetTownAction>
  | PutEffect<SetCoordAction>
  | SelectEffect
  | PutEffect<GetWeatherAction>,
  void,
  ResponseGetTown
> {
  const data = yield call(() => getWeatherInfo.getTownCoordinates(action.town));
  const lang = yield select((state: GlobalState) => state.location.lang);
  yield put(setCoord(data.lat, data.lon));
  //@ts-ignore
  yield put(getWeather(data.lat, data.lon, lang));
  yield put(setTown(action.town));
}

type SetLangActionWorker = {
  lang: string;
};

type ResponseSetLang = {
  lang: string;
};

function* setLangWorker(
  action: SetLangActionWorker
): Generator<
  PutEffect<SetLangAction> | SelectEffect | PutEffect<GetWeatherAction>,
  void,
  ResponseSetLang
> {
  yield put(setLang(action.lang));
  const lat = yield select((state: GlobalState) => state.location.lat);
  const lon = yield select((state: GlobalState) => state.location.lon);
  yield put(getWeather(Number(lat), Number(lon), action.lang));
}

export function* locationWatcher() {
  //@ts-ignore
  yield takeEvery(GET_TOWN_ASYNC, getTownWorker);
  //@ts-ignore
  yield takeEvery(SET_LANG_ASYNC, setLangWorker);
}
