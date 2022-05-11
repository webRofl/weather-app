import { useEffect } from 'react';
import { getTown } from './redux/locationReducer';
import Preloader from './components/common/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import Weather from './components/Weather/Weather';
import Header from './components/Header/Header';
import { GlobalState } from './redux/store';
import classes from './App.module.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const town = useSelector((state: GlobalState) => state.location.town);

  useEffect(() => {
    dispatch(getTown('Moscow'));
  }, []);

  if (!town) {
    return (
      <div className={classes.mainPreloader}>
        <Preloader />
      </div>
    );
  }

  return (
    <div className={`${classes.root__wrapper} ${classes.wrapper}`}>
      <header className={`${classes.wrapper__header}`}>
        <Header />
      </header>
      <main className={classes.wrapper__main}>
        <Weather />
      </main>
    </div>
  );
};

export default App;
