const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_HOST = "http://dataservice.accuweather.com/";
const API_VERSION = "v1";

const LocationApiUrl = (latitude, longitude) =>
  `${API_HOST}locations/${API_VERSION}/cities/geoposition/search.json?q=${latitude},${longitude}&apikey=${API_KEY}`;

const WeatherApiUrl = key =>
  `${API_HOST}currentconditions/${API_VERSION}/${key}?apikey=${API_KEY}`;

export function getLocationKey(latitude, longitude) {
  return fetch(LocationApiUrl(latitude, longitude)).then(response =>
    response.json()
  );
}
export function getWeather(key) {
  return fetch(WeatherApiUrl(key)).then(response => response.json());
}
