export const conversionKelvinToCelsius = (temp) => Math.trunc(temp - 273.15); // kelvin --> celsius

export const conversionKelvinToFahrenheit = (temp) =>
  Math.trunc(((temp - 273.15) * 9) / 5 + 32); // kelvin --> fahrenheit

export const conversionPressure = (pressure) => Math.trunc(pressure / 1.333); // gPa --> mm. rt. st.
