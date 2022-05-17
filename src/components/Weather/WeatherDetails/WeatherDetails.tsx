import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../redux/store';
import classes from './WeatherDetails.module.css';
import WeatherDetailsItem from './WeatherDetailsItem/WeatherDetailsItem';

const WeatherDetails: React.FC = () => {
  const windSpeed = useSelector(
    (state: GlobalState) => state.weather.windSpeed
  );

  const pressure = useSelector((state: GlobalState) => state.weather.pressure);

  const humidity = useSelector((state: GlobalState) => state.weather.humidity);

  const feelsLikeC = useSelector(
    (state: GlobalState) => state.weather.feelsLikeC
  );

  const lang = useSelector((state: GlobalState) => state.location.lang);

  const feelsLikeF = useSelector(
    (state: GlobalState) => state.weather.feelsLikeF
  );

  const tempScaleC = useSelector(
    (state: GlobalState) => state.weather.tempScaleC
  );

  return (
    <div className={`${classes.main__details}`}>
      <WeatherDetailsItem
        value={windSpeed}
        description={lang === 'ru' ? 'ветер' : 'wind'}
        scale={lang === 'ru' ? 'м/с' : 'm/s'}
      />
      <WeatherDetailsItem
        value={pressure}
        description={lang === 'ru' ? 'давление' : 'pressure'}
        scale={lang === 'ru' ? 'мм. рт. ст.' : 'mmHg'}
      />
      <WeatherDetailsItem
        value={humidity}
        description={lang === 'ru' ? 'влажность' : 'humidity'}
        scale={'%'}
      />
      <WeatherDetailsItem
        value={tempScaleC ? feelsLikeC : feelsLikeF}
        description={lang === 'ru' ? 'ощущения' : 'feels like'}
        scale={tempScaleC ? 'ºC' : 'ºF'}
      />
    </div>
  );
};

export default WeatherDetails;
