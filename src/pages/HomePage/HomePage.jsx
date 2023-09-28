import { useEffect, useState } from "react";
import { HeaderContainer, InfoContainer, PageContainer } from "./style";
import { API, API_KEY } from "../../utils/constants"
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import axios from "axios";
import { kelvinToCelsius } from "../../utils/helpers";
import dayjs from "dayjs";
import ForecastChart from "../../components/ForecastChart/ForecastChart";

export default function HomePage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(undefined);
  const [forecast, setForecast] = useState(undefined);
  const default_city = 'São Paulo'

  function handleChange(event) {
    setCity(event.target.value);
  }

  useEffect(() => {
    getWeather(default_city);
    getForecast(default_city);
  }, []);

  function getWeather(city) {

    axios.get(`${API}/weather?q=${city}&appid=${API_KEY}&lang=pt_br`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch(() => alert('Algo deu errado. Verifique se o nome está correto.'))
  }

  function getForecast(city) {
    axios.get(`${API}/forecast?q=${city}&appid=${API_KEY}&lang=pt_br`)
      .then((response) => {
        const chartData = response.data.list.map((elem) => {
          const date = dayjs(elem.dt_txt).format("DD/MM(ddd)")
          return { date, temp: kelvinToCelsius(elem.main.temp) }
        })
        setForecast(chartData);
      })
      .catch((err) => console.log(err))
  }

  function updateInfo(city) {
    getWeather(city);
    getForecast(city);
  }

  return (
    <PageContainer>
      <HeaderContainer>
        <h1>Levo um casaquinho?</h1>
        <div>
          <input
            placeholder="Busque uma cidade"
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
          />
          <button onClick={() => updateInfo(city)}>Buscar</button>
        </div>
      </HeaderContainer>
      {
        weather && forecast ?
          <InfoContainer>
            <WeatherCard weatherData={weather} />
            <ForecastChart data={forecast} />
          </InfoContainer> :
          <p>Carregando...</p>
      }
    </PageContainer>
  );

}

