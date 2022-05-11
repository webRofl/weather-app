import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import classes from './Location.module.css';
import usePosition from '../../../utils/hooks/getPositiont';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../../redux/weatherReducer';
import { GlobalState } from '../../../redux/store';
import { getTown } from '../../../redux/locationReducer';
import Preloader from '../../common/Preloader/Preloader';

const Location: React.FC = () => {
  const town = useSelector((state: GlobalState) => state.location.town);

  const dispatch = useDispatch();

  const [isSearch, setIsSearch] = useState(false);

  const { lat, lon, error } = usePosition();

  const getPosition = () => {
    if (error) {
      alert(error);
      return;
    }
    dispatch(getWeather(Number(lat), Number(lon)));
  };

  if (!town) return <Preloader />;

  return (
    <>
      <div
        className={
          isSearch
            ? classes.header__townBlock_disable
            : classes.header__townBlock
        }
      >
        <span className={classes.header__town}>
          {town[0].toUpperCase().concat(town.slice(1))}
        </span>
        <div>
          <button
            className={classes.header__changeLocation}
            onClick={() => setIsSearch(true)}
          >
            Change location
          </button>
          <button
            className={classes.header__myLocation}
            onClick={getPosition}
          ></button>
        </div>
      </div>

      <Formik
        initialValues={{ town: '' }}
        onSubmit={(values, action) => {
          if (values.town.trim()) dispatch(getTown(values.town));
          setIsSearch(false);
          action.resetForm();
        }}
      >
        <Form
          className={
            isSearch
              ? classes.header__searchForm_active
              : classes.header__searchForm
          }
        >
          <Field
            type="text"
            name="town"
            autoFocus={true}
            className={classes.header__formInput}
          />
          <button type="submit" className={classes.header__formBtn}></button>
        </Form>
      </Formik>
    </>
  );
};

export default Location;
