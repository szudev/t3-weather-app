import Image from "next/image";
import type { DefaultWeatherType } from "../types/defaultWeatherType";
import { FaTemperatureLow } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { IoWater } from "react-icons/io5";

type WeatherCardProps = DefaultWeatherType;

const WeatherCard = ({ location, current }: WeatherCardProps) => {
  const conditionIconUrl = current.condition.icon.replace(
    "//cdn.weatherapi.com",
    ""
  );
  return (
    <>
      <div className="m-auto flex max-w-5xl flex-col rounded-2xl border border-youtube-light-border-color bg-youtube-light-button-color p-3 dark:border-none dark:bg-youtube-dark-button-color">
        <div className="flex flex-col justify-center py-4 @xs:flex-row @xs:items-center">
          <p className="text-black dark:text-white">Tuesday, 31 May 2022</p>
          <p className="text-black dark:text-white">Local Time: 12:46 PM</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-black dark:text-white">{location.name}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="py-4 text-black dark:text-white">
            {current.condition.text}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Image alt="" height={50} width={50} src={conditionIconUrl} />
          <p className="text-black dark:text-white">{current.temp_c}°</p>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-start gap-1 font-light">
              <FaTemperatureLow className=" text-black dark:text-white" />
              <span className="font-medium text-black dark:text-white">
                Real Fell:
              </span>
              <p className="font-medium text-black dark:text-white">
                {current.feelslike_c}°
              </p>
            </div>
            <div className="flex items-center justify-start gap-1 font-light">
              <FiWind className=" text-black dark:text-white" />
              <span className="font-medium text-black dark:text-white">
                Wind Speed:
              </span>
              <p className="font-medium text-black dark:text-white">
                {current.wind_kph} km/h
              </p>
            </div>
            <div className="flex items-center justify-start gap-1 font-light">
              <IoWater className=" text-black dark:text-white" />
              <span className="font-medium text-black dark:text-white">
                Humidity:
              </span>
              <p className="font-medium text-black dark:text-white">
                {current.humidity}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
