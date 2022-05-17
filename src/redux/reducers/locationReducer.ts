import {
  SetLangAction,
  SetLangAsyncAction,
} from './../types/locationReducerTypes';
import {
  SET_LANG,
  SET_LANG_ASYNC,
} from './../actionTypes/locationReducerActionTypes';
import {
  GET_TOWN_ASYNC,
  SET_COORD,
  SET_TOWN,
} from '../actionTypes/locationReducerActionTypes';
import {
  SetTownAction,
  SetCoordAction,
  GetTownAction,
  LocationState,
} from '../types/locationReducerTypes';

const initialState: LocationState = {
  town: null,
  lang: 'ru',
  lat: null,
  lon: null,
};

export type LocationReducerAction =
  | SetTownAction
  | SetCoordAction
  | SetLangAction;

const locationReducer = (
  state = initialState,
  action: LocationReducerAction
) => {
  switch (action.type) {
    case SET_TOWN:
      return { ...state, town: action.town };
    case SET_COORD:
      return { ...state, lat: action.lat, lon: action.lon };
    case SET_LANG:
      return { ...state, lang: action.lang };
    default:
      return state;
  }
};

export const setTown = (town: string): SetTownAction => ({
  type: SET_TOWN,
  town,
});

export const setCoord = (lat: number, lon: number): SetCoordAction => ({
  type: SET_COORD,
  lat,
  lon,
});

export const getTown = (town: string): GetTownAction => ({
  type: GET_TOWN_ASYNC,
  town,
});

export const setLang = (lang: string): SetLangAction => ({
  type: SET_LANG,
  lang,
});

export const setLangAsync = (lang: string): SetLangAsyncAction => ({
  type: SET_LANG_ASYNC,
  lang,
});

export default locationReducer;
