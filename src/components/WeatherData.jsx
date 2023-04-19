const WeatherData = ({ weatherData }) => {
  return (
    <div className="flex items-center justify-center">
      {weatherData && (
        <div>
          <div className="mt-6 flex justify-between md:gap-3 sm:gap-3 xs:gap-3">
            <p className="text-gray-800 text-3xl font-bold">
              {weatherData.name}
            </p>
            <p className="text-gray-800 text-3xl font-bold">
              {Math.floor(((weatherData.main.temp - 273.15) * 9) / 5 + 32)}{" "}
              &#176;F
            </p>
          </div>
          <div className="p-5 flex md:flex-col sm:flex-col xs:flex-col xxs:flex-col gap-7 text-gray-800 text-2xl font-semibold mt-7 bg-white/30 backdrop-blur-md rounded-lg">
            <div className="flex flex-col items-center">
              <p>Temperature </p>
              <p>
                {Math.floor(
                  ((weatherData.main.feels_like - 273.15) * 9) / 5 + 32
                )}{" "}
                &#176;F
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p>Weather</p>
              <p className=" text-base">{weatherData.weather[0].description}</p>
            </div>
            <div className="flex flex-col items-center">
              <p>Humidity</p>
              <p>{weatherData.main.humidity}%</p>
            </div>
            <div className="flex flex-col items-center">
              <p>Wind</p>
              <p>{weatherData.wind.speed}MPH</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default WeatherData;
