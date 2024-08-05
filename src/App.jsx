import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import WeatherInformationsFiveDays from "./components/WeatherInformationsFiveDays/WeatherInformationsFiveDays";

function App() {
  const [weather, setWeather] = useState();
  const [weatherFiveDays, setWeatherFiveDays] = useState();
  const inputRef = useRef();

  async function searchCity() {
    console.log(inputRef.current.value);
    const city = inputRef.current.value;
    const key = "7476f2b1f0f7181ad25d66cb1a2e851a";
    const urlFiveDays = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const apiInfo = await axios.get(url);
    const apiInfoFiveDays = await axios.get(urlFiveDays)
    setWeather(apiInfo.data);
    setWeatherFiveDays(apiInfoFiveDays.data)
  }

  return (
    <div className="container">
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a Cidade" />
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformations weather={weather} />
      {weatherFiveDays && <WeatherInformationsFiveDays weatherFiveDays={weatherFiveDays}/>}
    </div>
  );
}
 
export default App;
