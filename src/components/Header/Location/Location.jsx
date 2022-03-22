import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import classes from './Location.module.css';

const Location = (props) => {
  const [isSearch, setIsSearch] = useState(false);

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
          {props.town[0].toUpperCase().concat(props.town.slice(1))}
        </span>
        <div>
          <button
            className={classes.header__changeLocation}
            onClick={() => setIsSearch(true)}
          >
            Change location
          </button>
          <button className={classes.header__myLocation}></button>
        </div>
      </div>

      <Formik
        initialValues={{ town: '' }}
        onSubmit={(values, action) => {
          if (values.town.trim()) props.getTown(values.town);
          setIsSearch(false);
          action.resetForm({ town: '' });
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
