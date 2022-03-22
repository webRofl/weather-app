import React from 'react';
import classes from './ChangeMetric.module.css';

const ChangeMetric = (props) => {
  const changeScaleC = () => {
    props.setTempScaleC(true);
  };

  const changeScaleF = () => {
    props.setTempScaleC(false);
  };

  return (
    <div className={classes.header__changeMetric}>
      <span
        className={`${classes.header__scale} ${
          props.tempScaleC ? classes.header__scale_active : ''
        }`}
        onClick={changeScaleC}
      >
        C
      </span>
      <span
        className={`${classes.header__scale} ${
          !props.tempScaleC ? classes.header__scale_active : ''
        }`}
        onClick={changeScaleF}
      >
        F
      </span>
    </div>
  );
};

export default ChangeMetric;
