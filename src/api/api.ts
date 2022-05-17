import axios from 'axios';

const apiKey = '0c9bd8408371b8e04459680743159267';

export type GetTownCoordinates = {
  status: number;
  lat: number;
  lon: number;
};

export type GetTownWeather = {
  status: number;
};

export const getWeatherInfo = {
  getTownCoordinates: (town: string) => {
    return axios
      .get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=5&appid=${apiKey}`
      )
      .then((response) => response.data[0]);
  },
  getTownWeather: (lat: number, lon: number, lang: string) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=0c9bd8408371b8e04459680743159267&lang=${lang}`
      )
      .then((response) => response.data);
  },
};
