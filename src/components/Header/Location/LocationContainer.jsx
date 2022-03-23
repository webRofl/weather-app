import Location from './Location';
import { connect } from 'react-redux';
import { getTown } from '../../../redux/locationReducer';
import { getWeather } from '../../../redux/weatherReducer';

const mapStateToProps = (state) => {
  return {
    town: state.location.town,
    weather: state.location.weather,
  };
};

const LocationContainer = connect(mapStateToProps, { getTown, getWeather })(
  Location
);

export default LocationContainer;
