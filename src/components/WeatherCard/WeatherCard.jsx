import { CardContainer, CityName, LeftContainer, RightContainer, Temperature } from "./style";
import PropTypes from "prop-types";
import { kelvinToCelsius, capitalizeString } from "../../utils/helpers";
import status from "../../utils/status";

function WeatherCard({ weatherData }) {

    const {main, name, weather} = weatherData;
    const mainWeather = weather[0].main;
    const weatherStatus = status[mainWeather]
    // console.log(weatherData);
    // console.log(weatherStatus);

    return(
        <CardContainer status={weatherStatus}>
            <LeftContainer>
              <CityName>Agora: {name}</CityName>
              <div>
                <span>Mínima: {kelvinToCelsius(main.temp_min)}°C</span>
                <span>Máxima: {kelvinToCelsius(main.temp_max)}°C</span>
              </div>
            </LeftContainer>
            <RightContainer>
            <span>{capitalizeString(weatherStatus.description)}</span>
            <Temperature>{kelvinToCelsius(main.temp)}°C</Temperature>
            </RightContainer>
        </CardContainer>
    )
}

WeatherCard.propTypes = {
    weatherData: PropTypes.object,
    name: PropTypes.string,
    main: PropTypes.object,
    weather: PropTypes.array,
}

export default WeatherCard;