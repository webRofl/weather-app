import React from 'react';
import classes from './WeatherDetailsItem.module.css';

const WeatherDetailsItem = (props) => {
  return (
    <div className={classes.details__item}>
      <span className={classes.details__description}>{props.description}</span>
      <span className={classes.details__value}>
        {props.value}
        {` ${props.scale}`}
      </span>
    </div>
  );
};

export default WeatherDetailsItem;
