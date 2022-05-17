import { GET_WEATHER_ASYNC } from './../actionTypes/weatherReducerActionTypes';
import {
  SET_TEMP_SCALE_C,
  SET_WEATHER,
} from '../actionTypes/weatherReducerActionTypes';

export type WeatherState = {
  tempC: number | null;
  tempF: number | null;
  windSpeed: number | null;
  pressure: number | null;
  humidity: number | null;
  feelsLikeC: number | null;
  feelsLikeF: number | null;
  description: string | null;
  icon: string | null;
  tempScaleC: boolean;
  rain: number | null;
};

export type SetWeatherAction = {
  type: typeof SET_WEATHER;
  tempC: number;
  tempF: number;
  pressure: number;
  humidity: number;
  feelsLikeC: number;
  feelsLikeF: number;
  description: string;
  icon: string;
  rain: number;
  windSpeed: number;
};

export type SetTempScaleCAction = {
  type: typeof SET_TEMP_SCALE_C;
  bool: boolean;
};

export type GetWeatherAction = {
  type: typeof GET_WEATHER_ASYNC;
  lat: number;
  lon: number;
  lang: string;
};
