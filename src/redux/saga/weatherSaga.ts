import { GlobalState } from './../store';
import { GET_WEATHER_ASYNC } from './../actionTypes/weatherReducerActionTypes';
import { SetWeatherAction } from './../types/weatherReducerTypes';
import { GetTownWeather, getWeatherInfo } from './../../api/api';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  select,
  SelectEffect,
  takeEvery,
} from 'redux-saga/effects';
import { setTown } from '../reducers/locationReducer';
import { setWeather } from '../reducers/weatherReducer';
import { SetTownAction } from '../types/locationReducerTypes';

type GetWeatherWorkerAction = {
  lat: number;
  lon: number;
};

type Main = {
  pressure: number;
  humidity: number;
  feels_like: number;
  temp: number;
};

type Rain = {
  '3h': number;
};

type Weather = {
  description: string;
  icon: string;
  main: string;
};

type Wind = {
  speed: number;
};

type List = {
  main: Main;
  weather: Weather[];
  wind: Wind;
  rain: Rain;
};

type CityType = {
  name: string;
};

type ResponseGetWeather = {
  list: List[];
  city: CityType;
  lang: string;
  cod: string;
};

function* getWeatherWorker(
  action: GetWeatherWorkerAction
): Generator<
  | CallEffect<GetTownWeather>
  | PutEffect<SetTownAction>
  | SelectEffect
  | PutEffect<SetWeatherAction>,
  void,
  ResponseGetWeather
> {
  const lang = yield select((state: GlobalState) => state.location.lang);
  const data = yield call(() =>
    //@ts-ignore
    getWeatherInfo.getTownWeather(action.lat, action.lon, lang)
  );
  if (data.cod === '200') {
    const main = data.list[0].main;
    const weather = data.list[0].weather[0];

    yield put(setTown(data.city.name));
    yield put(
      setWeather(
        main.temp,
        main.pressure,
        main.humidity,
        main.feels_like,
        weather.description,
        weather.icon,
        data.list[0].wind.speed
      )
    );
  }
}

export function* weatherWatcher() {
  //@ts-ignore
  yield takeEvery(GET_WEATHER_ASYNC, getWeatherWorker);
}
