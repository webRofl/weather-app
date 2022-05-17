import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './ChangeLanguage.module.css';
import { setLang, setLangAsync } from '../../../redux/reducers/locationReducer';

const ChangeLanguage: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    dispatch(setLangAsync(event.currentTarget.value));
  };

  return (
    <div className={classes.header__changeLanguageBlock}>
      <select
        onChange={handleChange}
        className={classes.header__changeLanguageSelect}
      >
        <option value="ru" className={classes.header__changeLanguageOption}>
          Русский
        </option>
        <option value="en" className={classes.header__changeLanguageOption}>
          English
        </option>
      </select>
    </div>
  );
};

export default ChangeLanguage;
