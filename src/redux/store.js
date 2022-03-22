import { createStore, combineReducers, applyMiddleware } from 'redux';
import locationReducer from './locationReducer';
import thunkMiddleware from 'redux-thunk';
import weatherReducer from './weatherReducer';

const reducers = {
  location: locationReducer,
  weather: weatherReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunkMiddleware)
);

export default store;
