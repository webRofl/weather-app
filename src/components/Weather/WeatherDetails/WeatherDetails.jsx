import React from 'react';
import classes from './WeatherDetails.module.css';
import WeatherDetailsItem from './WeatherDetailsItem/WeatherDetailsItem';

const WeatherDetails = (props) => {
  return (
    <div className={`${classes.main__details}`}>
      <WeatherDetailsItem
        value={props.windSpeed}
        description={'Wind'}
        scale={'m/s'}
      />
      <WeatherDetailsItem
        value={props.pressure}
        description={'Pressure'}
        scale={'mmHg'}
      />
      <WeatherDetailsItem
        value={props.humidity}
        description={'Humidity'}
        scale={'%'}
      />
      <WeatherDetailsItem
        value={props.visibility}
        description={'Weather Group'}
        scale={''}
      />
    </div>
  );
};

export default WeatherDetails;
