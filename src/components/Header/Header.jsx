import React from 'react';
import LocationContainer from './Location/LocationContainer';
import ChangeMetric from './ChangeMetric/ChangeMetric';

const Header = (props) => {
  return (
    <>
      <LocationContainer />
      <ChangeMetric
        tempScaleC={props.tempScaleC}
        setTempScaleC={props.setTempScaleC}
      />
    </>
  );
};

export default Header;
