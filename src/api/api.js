import axios from 'axios';

const apiKey = '0c9bd8408371b8e04459680743159267';

export const getWeatherInfo = {
  getTownCoordinates: (town) => {
    return axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=5&appid=${apiKey}`
      )
      .then((response) => response.data[0]);
  },
  getTownWeather: (lat, lon) => {
    return axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0c9bd8408371b8e04459680743159267`
      )
      .then((response) => response.data);
  },
};
