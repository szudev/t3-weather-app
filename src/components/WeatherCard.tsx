import type { Location, Current } from "../types/defaultTimeType";

type WeatherCardProps = {
  location: Location;
  current: Current;
};

const WeatherCard = ({ location, current }: WeatherCardProps) => {
  return (
    <div className="m-auto flex max-w-5xl">
      <span className="text-white">{location.country}</span>
    </div>
  );
};

export default WeatherCard;
