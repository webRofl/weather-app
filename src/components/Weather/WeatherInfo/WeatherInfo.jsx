import React from 'react';
import classes from './WeatherInfo.module.css';

const WeatherInfo = (props) => {
  return (
    <div className={`${classes.main__bigWeatherBlock}`}>
      {props.tempScaleC ? (
        <span className={classes.bigWeatherBlock__temperatureValue}>
          {props.tempC}ºC
        </span>
      ) : (
        <span className={classes.bigWeatherBlock__temperatureValue}>
          {props.tempF}ºF
        </span>
      )}
      <span className={classes.bigWeatherBlock__description}>
        {props.description}
      </span>
    </div>
  );
};

export default WeatherInfo;
