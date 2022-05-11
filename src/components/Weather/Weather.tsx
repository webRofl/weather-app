import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import classes from './Weather.module.css';

const Weather: React.FC = () => {
  return (
    <div className={classes.main__wrapper}>
      <WeatherInfo />
      <WeatherDetails />
    </div>
  );
};

export default Weather;
