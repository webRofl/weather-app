import { createStore, combineReducers, applyMiddleware } from 'redux';
import locationReducer, { LocationState } from './locationReducer';
import thunkMiddleware from 'redux-thunk';
import weatherReducer, { WeatherState } from './weatherReducer';

const reducers = {
  location: locationReducer,
  weather: weatherReducer,
};

export type GlobalState = {
  location: LocationState;
  weather: WeatherState;
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunkMiddleware)
);

export default store;
