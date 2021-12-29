import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <WeatherSearch />
      <Forecast />
    </div>
  );
}

export default App;
