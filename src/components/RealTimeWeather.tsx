import Image from "next/image";
import { type DefaultWeatherType } from "../types/defaultWeatherType";
import temperatureRangeColors from "../utils/temperatureRange";
import { FaTemperatureLow } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { IoWater } from "react-icons/io5";

type WeatherCardProps = DefaultWeatherType;

const RealTimeWeather = ({ location, current }: WeatherCardProps) => {
  const conditionIconUrl = current.condition.icon.replace(
    "//cdn.weatherapi.com",
    ""
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-4 pb-8 @sm:flex-row">
        <p className="text-xl text-black dark:text-white">
          Tuesday, 31 May 2022
        </p>
        <p className="text-xl text-black dark:text-white">
          Local Time: 12:46 PM
        </p>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-4xl text-black dark:text-white">{location.name}</p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          alt={current.condition.text}
          height={60}
          width={60}
          src={conditionIconUrl}
        />
        <p className="py-4 text-2xl text-black dark:text-white">
          {current.condition.text}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between gap-8">
        <p
          className={
            temperatureRangeColors(current.temp_c) + " text-4xl font-bold"
          }
        >
          {current.temp_c}°C
        </p>
        <div className="flex flex-col gap-2 pb-2 @md:flex-row @md:gap-4">
          <div className="flex items-center justify-start gap-1 font-light">
            <FaTemperatureLow className="text-2xl text-red-500" />
            <span className="text-xl text-black dark:text-white">
              Real Feel:
            </span>
            <p
              className={
                temperatureRangeColors(current.feelslike_c) +
                " text-xl font-bold"
              }
            >
              {current.feelslike_c}°C
            </p>
          </div>
          <div className="flex items-center justify-start gap-1 font-light">
            <FiWind className="text-2xl text-green-400" />
            <span className="text-xl text-black dark:text-white">
              Wind Speed:
            </span>
            <p className="text-xl font-medium text-black dark:text-white">
              {current.wind_kph} km/h
            </p>
          </div>
          <div className="flex items-center justify-start gap-1 font-light">
            <IoWater className="text-2xl text-blue-400" />
            <span className="text-xl text-black dark:text-white">
              Humidity:
            </span>
            <p className="text-xl font-medium text-black dark:text-white">
              {current.humidity}%
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealTimeWeather;
