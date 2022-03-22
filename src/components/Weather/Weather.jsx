import WeatherDetails from './WeatherDetails/WeatherDetails';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import classes from './Weather.module.css';

const Weather = (props) => {
  return (
    <div className={classes.main__wrapper}>
      <WeatherInfo
        tempC={props.weather.tempC}
        tempF={props.weather.tempF}
        description={props.weather.description}
        icon={props.weather.icon}
        tempScaleC={props.weather.tempScaleC}
      />
      <WeatherDetails
        windSpeed={props.weather.windSpeed}
        pressure={props.weather.pressure}
        humidity={props.weather.humidity}
        visibility={props.weather.visibility}
      />
    </div>
  );
};

export default Weather;
