import { connect } from 'react-redux';
import Weather from './Weather';

const mapStateToProps = (state) => ({
  weather: state.weather,
});

const WeatherContainer = connect(mapStateToProps, null)(Weather);

export default WeatherContainer;
