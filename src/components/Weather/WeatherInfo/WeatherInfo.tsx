import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalState } from '../../../redux/store';
import classes from './WeatherInfo.module.css';

const WeatherInfo: React.FC = () => {
  const tempScaleC = useSelector(
    (state: GlobalState) => state.weather.tempScaleC
  );

  const tempC = useSelector((state: GlobalState) => state.weather.tempC);

  const tempF = useSelector((state: GlobalState) => state.weather.tempF);

  const description = useSelector(
    (state: GlobalState) => state.weather.description
  );

  return (
    <div className={`${classes.main__bigWeatherBlock}`}>
      {tempScaleC ? (
        <span className={classes.bigWeatherBlock__temperatureValue}>
          {tempC}ºC
        </span>
      ) : (
        <span className={classes.bigWeatherBlock__temperatureValue}>
          {tempF}ºF
        </span>
      )}
      <span className={classes.bigWeatherBlock__description}>
        {description}
      </span>
    </div>
  );
};

export default WeatherInfo;
