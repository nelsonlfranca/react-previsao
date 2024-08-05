/* eslint-disable react/prop-types */
import './WeatherInformations.css'
function WeatherInformations({ weather }) {
 
  if (!weather || !weather.weather) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='weather-container'>
      <h2>{weather.name}</h2>
      <div className='weather-info'>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Weather Icon"
        />
        <p className='temp'>{Math.round(weather.main.temp)}ºC</p>
      </div>
      <p className='description'>{weather.weather[0].description}</p>
      <div className='details'>
        <p>Sensação térmica: {Math.round(weather.main.feels_like)}ºC</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}Pa</p>
      </div>
    </div>
  );
}
export default WeatherInformations;
