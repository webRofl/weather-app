import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './ChangeMetric.module.css';
import { GlobalState } from '../../../redux/store';
import { setTempScaleC } from '../../../redux/reducers/weatherReducer';

const ChangeMetric: React.FC = () => {
  const tempScaleC = useSelector(
    (state: GlobalState) => state.weather.tempScaleC
  );

  const dispatch = useDispatch();

  const changeScaleC = () => {
    dispatch(setTempScaleC(true));
  };

  const changeScaleF = () => {
    dispatch(setTempScaleC(false));
  };

  return (
    <div className={classes.header__changeMetric}>
      <span
        className={`${classes.header__scale} ${
          tempScaleC ? classes.header__scale_active : ''
        }`}
        onClick={changeScaleC}
      >
        C
      </span>
      <span
        className={`${classes.header__scale} ${
          !tempScaleC ? classes.header__scale_active : ''
        }`}
        onClick={changeScaleF}
      >
        F
      </span>
    </div>
  );
};

export default ChangeMetric;
