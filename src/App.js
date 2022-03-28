import classes from './App.module.css';
import { useEffect } from 'react';
import { getTown } from './redux/locationReducer';
import Preloader from './components/common/Preloader/Preloader';
import { connect } from 'react-redux';
import WeatherContainer from './components/Weather/WeatherContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  useEffect(() => {
    props.getTown('Moscow');
  }, []);

  if (!props.town) {
    return (
      <div className={classes.mainPreloader}>
        <Preloader />
      </div>
    );
  }

  return (
    <div className={`${classes.root__wrapper} ${classes.wrapper}`}>
      <header className={`${classes.wrapper__header}`}>
        <HeaderContainer />
      </header>
      <main className={classes.wrapper__main}>
        <WeatherContainer />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  town: state.location.town,
});

const AppContainer = connect(mapStateToProps, { getTown })(App);

export default AppContainer;
