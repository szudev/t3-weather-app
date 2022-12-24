import type { DefaultWeatherType } from "../types/defaultWeatherType";
import RealTimeWeather from "./RealTimeWeather";

type WeatherCardProps = DefaultWeatherType;

const WeatherCard = ({ location, current }: WeatherCardProps) => {
  return (
    <>
      <div className="m-auto flex max-w-5xl flex-col rounded-2xl border border-youtube-light-border-color bg-youtube-light-button-color p-3 dark:border-none dark:bg-youtube-dark-button-color">
        <RealTimeWeather location={location} current={current} />
      </div>
    </>
  );
};

export default WeatherCard;
