import React from 'react';
import ChangeMetric from './ChangeMetric/ChangeMetric';
import Location from './Location/Location';

const Header: React.FC = () => {
  return (
    <>
      <Location />
      <ChangeMetric />
    </>
  );
};

export default Header;
