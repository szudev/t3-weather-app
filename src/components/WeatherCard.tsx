import type { ForeCastWeatherType } from "../types/foreCastWeatherType";
import RealTimeWeather from "./RealTimeWeather";

type WeatherCardProps = ForeCastWeatherType;

const WeatherCard = ({ location, current, forecast }: WeatherCardProps) => {
  return (
    <>
      <div className="m-auto flex max-w-5xl flex-col rounded-2xl border border-youtube-light-border-color bg-youtube-light-button-color p-3 dark:border-none dark:bg-youtube-dark-button-color">
        <RealTimeWeather
          location={location}
          current={current}
          forecast={forecast}
        />
      </div>
    </>
  );
};

export default WeatherCard;
