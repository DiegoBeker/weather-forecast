import { useEffect, useState } from "react";
import { HeaderContainer, PageContainer } from "./style";
import { API, API_KEY} from "../../utils/constants"
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import axios from "axios";

export default function HomePage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(undefined);
  
  function handleChange(event) {
    setCity(event.target.value);
  }

  useEffect(() =>{
    const default_city = 'São Paulo'

    axios.get(`${API}/weather?q=${default_city}&appid=${API_KEY}&lang=pt_br`)
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch((err) => console.log(err))
  }, []);

  function getWeather(city) {

    axios.get(`${API}/weather?q=${city}&appid=${API_KEY}&lang=pt_br`)
      .then((response) => {
        //console.log(response.data);
        setWeather(response.data);
      })
      .catch(() => alert('Algo deu errado. Verifique se o nome está correto.'))
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
          <button onClick={() => getWeather(city)}>Buscar</button>
        </div>
      </HeaderContainer>
      {
      weather ?
      <WeatherCard weatherData={weather}/> :
      <p>Carregando</p>
      }
    </PageContainer>
  );

}

