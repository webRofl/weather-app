import { createStore, combineReducers, applyMiddleware } from 'redux';
import locationReducer from './reducers/locationReducer';
import weatherReducer from './reducers/weatherReducer';
import createSagaMiddleware from 'redux-saga';
import { WeatherState } from './types/weatherReducerTypes';
import rootWatcher from './saga/rootSaga';
import { LocationState } from './types/locationReducerTypes';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
});

export type GlobalState = {
  location: LocationState;
  weather: WeatherState;
};

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export default store;
