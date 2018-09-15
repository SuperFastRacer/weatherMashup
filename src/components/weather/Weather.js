import React, { Component } from "react";
import "./weather.module.css";
import { getLocationKey, getWeather } from "../../api/WeatherAPI";
import Background from "../background/Background.js";
import Music from "../music/Music.js";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null,
      temperature: "Hold on",
      weatherText: ""
    };
    this.loadPosition();
  }

  getCurrentPosition = (options = {}) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  loadPosition = async () => {
    try {
      const position = await this.getCurrentPosition();
      const { latitude, longitude } = position.coords;
      this.setState({
        latitude,
        longitude
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchLocationKey = async () => {
    let locationKey = null;
    await this.loadPosition();

    await getLocationKey(this.state.latitude, this.state.longitude)
      .then(data => {
        locationKey = data.Key;
      })
      .catch(err => {
        console.log(err);
      });
    return locationKey;
  };

  fetchWeather = async () => {
    let locationKey = await this.fetchLocationKey();

    if (locationKey !== undefined) {
      getWeather(locationKey)
        .then(data => {
          let temperature = data[0].Temperature.Metric.Value + "°C";
          let weatherText = data[0].WeatherText;
          this.setState({
            temperature,
            weatherText
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  componentDidMount() {
    this.fetchWeather();
  }

  render() {
    return (
      <div className="weather-container">
        <div className="temperature">
          <h1>{this.state.temperature}</h1>
        </div>
        <Music searchString={this.state.weatherText} />
        <Background
          searchString={
            this.state.weatherText !== "" ? this.state.weatherText : "waiting"
          }
        />
      </div>
    );
  }
}

export default Weather;
