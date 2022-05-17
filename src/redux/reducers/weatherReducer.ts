import {
  conversionKelvinToCelsius,
  conversionKelvinToFahrenheit,
  conversionPressure,
} from '../../utils/conversion/сonversion';
import { getWeatherInfo } from '../../api/api';
import { setTown } from './locationReducer';
import {
  GET_WEATHER_ASYNC,
  SET_TEMP_SCALE_C,
  SET_WEATHER,
} from '../actionTypes/weatherReducerActionTypes';
import {
  GetWeatherAction,
  SetTempScaleCAction,
  SetWeatherAction,
  WeatherState,
} from '../types/weatherReducerTypes';

const initialState: WeatherState = {
  tempC: null,
  tempF: null,
  windSpeed: null,
  pressure: null,
  humidity: null,
  feelsLikeC: null,
  feelsLikeF: null,
  description: null,
  icon: null,
  tempScaleC: true,
  rain: null,
};

type WeatherReducerAction = SetWeatherAction | SetTempScaleCAction;

const weatherReducer = (state = initialState, action: WeatherReducerAction) => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        tempC: action.tempC,
        tempF: action.tempF,
        pressure: action.pressure,
        humidity: action.humidity,
        feelsLikeC: action.feelsLikeC,
        feelsLikeF: action.feelsLikeF,
        description: action.description,
        icon: action.icon,
        rain: action.rain,
        windSpeed: action.windSpeed,
      };
    case SET_TEMP_SCALE_C:
      return {
        ...state,
        tempScaleC: action.bool,
      };
    default:
      return state;
  }
};

export const setWeather = (
  temp: number,
  pressure: number,
  humidity: number,
  feelsLike: number,
  description: string,
  icon: string,
  rain: number,
  windSpeed: number
): SetWeatherAction => ({
  type: SET_WEATHER,
  tempC: conversionKelvinToCelsius(temp),
  tempF: conversionKelvinToFahrenheit(temp),
  pressure: conversionPressure(pressure),
  humidity,
  feelsLikeC: conversionKelvinToCelsius(feelsLike),
  feelsLikeF: conversionKelvinToFahrenheit(feelsLike),
  description,
  icon,
  rain,
  windSpeed,
});

export const setTempScaleC = (bool: boolean): SetTempScaleCAction => ({
  type: SET_TEMP_SCALE_C,
  bool,
});

export const getWeather = (
  lat: number,
  lon: number,
  lang: string
): GetWeatherAction => ({
  type: GET_WEATHER_ASYNC,
  lat,
  lon,
  lang,
});

export default weatherReducer;
