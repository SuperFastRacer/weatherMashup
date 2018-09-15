import React, { Component } from "react";
import "./App.css";

import Weather from "./components/weather/Weather.js";

require("dotenv").config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
