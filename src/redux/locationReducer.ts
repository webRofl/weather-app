import { getWeatherInfo } from '../api/api';
import { getWeather } from './weatherReducer';

const SET_TOWN = 'locationReducer/SET_TOWN';

export type LocationState = {
  town: string | null;
};

const initialState = {
  town: null,
};

export type LocationReducerAction = SetTownAction;

const locationReducer = (
  state = initialState,
  action: LocationReducerAction
) => {
  switch (action.type) {
    case SET_TOWN:
      return { ...state, town: action.town };
    default:
      return state;
  }
};

type SetTownAction = {
  type: typeof SET_TOWN;
  town: string;
};

export const setTown = (town: string): SetTownAction => ({
  type: SET_TOWN,
  town,
});

export const getTown = (town: string) => async (dispatch: any) => {
  const townInfo = await getWeatherInfo.getTownCoordinates(town);
  dispatch(getWeather(townInfo.lat, townInfo.lon));
  dispatch(setTown(town));
};

export default locationReducer;
