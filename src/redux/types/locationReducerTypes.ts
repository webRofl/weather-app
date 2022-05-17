import {
  SET_LANG,
  SET_LANG_ASYNC,
} from './../actionTypes/locationReducerActionTypes';
import {
  SET_TOWN,
  SET_COORD,
  GET_TOWN_ASYNC,
} from '../actionTypes/locationReducerActionTypes';

export type LocationState = {
  town: string | null;
  lang: string;
  lat: number | null;
  lon: number | null;
};

export type SetTownAction = {
  type: typeof SET_TOWN;
  town: string;
};

export type GetTownAction = {
  type: typeof GET_TOWN_ASYNC;
  town: string;
};

export type SetCoordAction = {
  type: typeof SET_COORD;
  lat: number;
  lon: number;
};

export type SetLangAction = {
  type: typeof SET_LANG;
  lang: string;
};
export type SetLangAsyncAction = {
  type: typeof SET_LANG_ASYNC;
  lang: string;
};
