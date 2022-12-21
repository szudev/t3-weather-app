import type { Location, Current } from "../types/defaultTimeType";

type WeatherCardProps = {
  location: Location;
  current: Current;
};

const WeatherCard = ({ location, current }: WeatherCardProps) => {
  return (
    <div className="m-auto flex max-w-5xl flex-col rounded-2xl border border-youtube-light-border-color dark:border-youtube-dark-border-color">
      <span className="dark:text-white">{location.country}</span>
      <span className="dark:text-white">{location.name}</span>
      <span className="dark:text-white">{location.region}</span>
    </div>
  );
};

export default WeatherCard;
