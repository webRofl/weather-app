import Header from './Header';
import { connect } from 'react-redux';
import { setTempScaleC } from '../../redux/weatherReducer';

const mapStateToProps = (state) => ({
  tempScaleC: state.weather.tempScaleC,
});

const HeaderContainer = connect(mapStateToProps, { setTempScaleC })(Header);

export default HeaderContainer;
