import { useState, useEffect } from "react";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";

const App = () => {
  const API_KEY = "931ee4579d1410efe5d40c1bd07749c3";
  const [text, setText] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  const fetchData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}`
    );
    const data = await res.json();
    setWeatherData(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('assets\app-background.jpg')] bg-cover">
      <section className="flex flex-col">
        <h1 className="text-white text-3xl text-center font-semibold mb-4">
          Weather App
        </h1>
        <Search changeHandler={changeHandler} fetchData={fetchData} />
        <WeatherData weatherData={weatherData} />
      </section>
    </div>
  );
};

export default App;
