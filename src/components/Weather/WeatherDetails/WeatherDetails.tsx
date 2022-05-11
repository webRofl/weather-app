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

  const visibility = useSelector(
    (state: GlobalState) => state.weather.visibility
  );

  return (
    <div className={`${classes.main__details}`}>
      <WeatherDetailsItem
        value={windSpeed}
        description={'Wind'}
        scale={'m/s'}
      />
      <WeatherDetailsItem
        value={pressure}
        description={'Pressure'}
        scale={'mmHg'}
      />
      <WeatherDetailsItem
        value={humidity}
        description={'Humidity'}
        scale={'%'}
      />
      <WeatherDetailsItem
        value={visibility}
        description={'Weather Group'}
        scale={''}
      />
    </div>
  );
};

export default WeatherDetails;
