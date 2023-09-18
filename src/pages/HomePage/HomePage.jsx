import { useState } from "react";
import { HeaderContainer, PageContainer } from "./style";
import WeatherCard from "../../components/WeatherCard/WeatherCard";

export default function HomePage() {
  const [city, setCity] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
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
          <button onClick={() => alert(city)}>Buscar</button>
        </div>
      </HeaderContainer>
      <WeatherCard />
    </PageContainer>
  );

}

