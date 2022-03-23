import {
  conversionKelvinToCelsius,
  conversionKelvinToFahrenheit,
  conversionPressure,
} from '../utils/conversion/сonversion';
import { getWeatherInfo } from '../api/api';
import { setTown } from './locationReducer';

const SET_WEATHER = 'locationReducer/SET_WEATHER';
const SET_TEMP_SCALE_C = 'SET_TEMP_SCALE_C';

const initialState = {
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
};

const weatherReducer = (state = initialState, action) => {
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

export const setWeather = (
  temp,
  pressure,
  humidity,
  feelsLike,
  description,
  icon,
  visibility,
  windSpeed
) => ({
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

export const setTempScaleC = (bool) => ({ type: SET_TEMP_SCALE_C, bool });

export const getWeather = (lat, lon) => async (dispatch) => {
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
