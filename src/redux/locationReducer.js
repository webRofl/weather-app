import { getWeatherInfo } from '../api/api';
import { getWeather } from './weatherReducer';

const SET_TOWN = 'locationReducer/SET_TOWN';

const initialState = {
  town: null,
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOWN:
      return { ...state, town: action.town };
    default:
      return state;
  }
};

export const setTown = (town) => ({ type: SET_TOWN, town });

export const getTown = (town) => async (dispatch) => {
  const townInfo = await getWeatherInfo.getTownCoordinates(town);
  dispatch(getWeather(townInfo.lat, townInfo.lon));
  dispatch(setTown(town));
};

export default locationReducer;
