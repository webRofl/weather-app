import {
  conversionKelvinToCelsius,
  conversionKelvinToFahrenheit,
  conversionPressure,
} from '../utils/conversion/сonversion';
import { getWeatherInfo } from '../api/api';
import { setTown } from './locationReducer';

const SET_WEATHER = 'locationReducer/SET_WEATHER';
const SET_TEMP_SCALE_C = 'SET_TEMP_SCALE_C';

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
  visibility: number | null;
};

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
  visibility: null,
};

type WeatherReducerAction = SetWeatherAction | setTempScaleCAction;

const weatherReducer = (state = initialState, action: WeatherReducerAction) => {
  switch (action.type) {
    case SET_WEATHER:
      const tempC = action.tempC;
      const tempF = action.tempF;
      const pressure = action.pressure;
      const humidity = action.humidity;
      const feelsLikeC = action.feelsLikeC;
      const feelsLikeF = action.feelsLikeF;
      const description = action.description;
      const icon = action.icon;
      const visibility = action.visibility;
      const windSpeed = action.windSpeed;
      return {
        ...state,
        tempC,
        tempF,
        pressure,
        humidity,
        feelsLikeC,
        feelsLikeF,
        description,
        icon,
        visibility,
        windSpeed,
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

type SetWeatherAction = {
  type: typeof SET_WEATHER;
  tempC: number;
  tempF: number;
  pressure: number;
  humidity: number;
  feelsLikeC: number;
  feelsLikeF: number;
  description: string;
  icon: string;
  visibility: string;
  windSpeed: number;
};

export const setWeather = (
  temp: number,
  pressure: number,
  humidity: number,
  feelsLike: number,
  description: string,
  icon: string,
  visibility: string,
  windSpeed: number
): SetWeatherAction => ({
  type: SET_WEATHER,
  tempC: conversionKelvinToCelsius(temp),
  tempF: conversionKelvinToFahrenheit(temp),
  pressure: conversionPressure(pressure),
  humidity: humidity,
  feelsLikeC: conversionKelvinToCelsius(feelsLike),
  feelsLikeF: conversionKelvinToFahrenheit(feelsLike),
  description: description,
  icon: icon,
  visibility: visibility,
  windSpeed: windSpeed,
});

type setTempScaleCAction = {
  type: typeof SET_TEMP_SCALE_C;
  bool: boolean;
};

export const setTempScaleC = (bool: boolean): setTempScaleCAction => ({
  type: SET_TEMP_SCALE_C,
  bool,
});

export const getWeather =
  (lat: number, lon: number) => async (dispatch: any) => {
    const weatherInfo = await getWeatherInfo.getTownWeather(lat, lon);
    const main = weatherInfo.list[0].main;
    const weather = weatherInfo.list[0].weather[0];

    dispatch(setTown(weatherInfo.city.name));

    dispatch(
      setWeather(
        main.temp,
        main.pressure,
        main.humidity,
        main.feels_like,
        weather.description,
        weather.icon,
        weather.main,
        weatherInfo.list[0].wind.speed
      )
    );
  };

export default weatherReducer;
