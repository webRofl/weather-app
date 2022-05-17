import React from 'react';
import ChangeLanguage from './ChangeLanguage/ChangeLanguage';
import ChangeMetric from './ChangeMetric/ChangeMetric';
import Location from './Location/Location';
import classes from './Header.module.css';

const Header: React.FC = () => {
  return (
    <>
      <Location />
      <div className={classes.header__optionBlock}>
        <ChangeMetric />
        <ChangeLanguage />
      </div>
    </>
  );
};

export default Header;
