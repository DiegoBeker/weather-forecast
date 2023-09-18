import { CardContainer, CityName, LeftContainer, RightContainer, Temperature } from "./style";

export default function WeatherCard() {
    return(
        <CardContainer>
            <LeftContainer>
              <CityName>Agora: Belo Horizonte</CityName>
              <div>
                <span>Mínima: 15.9°C</span>
                <span>Máxima: 20.9°C</span>
              </div>
            </LeftContainer>
            <RightContainer>
            <span>Nublado</span>
            <Temperature>18.2°C</Temperature>
            </RightContainer>
        </CardContainer>
    )
}
