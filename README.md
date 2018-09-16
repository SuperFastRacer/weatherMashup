"A mashup is a web page or application that integrates complementary elements from two or more sources."

The used complementary elements are

- Giphy api (http://developers.giphy.com) - for gifs
- Accuweather api (https://developer.accuweather.com/) - for weather data
- Last.fm api (https://www.last.fm/api) - for song data

## To start the project

You need to add a ".env"-file to your project root that contains the following lines:

```
/* Giphy api key */
REACT_APP_BACKGROUND_API_KEY="<ADD YOURS>"

/* Last.fm api key */
REACT_APP_MUSIC_API_KEY="<ADD YOURS>"

/* Accuweather api key */
REACT_APP_WEATHER_API_KEY="<ADD YOURS>"
```

Then navigate to the project folder in your terminal, install the packages and start the app.

```
npm install
npm start
```
