import Image from "next/image";
import { type ForeCastWeatherType } from "../types/foreCastWeatherType";
import temperatureRangeColors from "../utils/temperatureRange";
import { FaTemperatureLow } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { IoWater } from "react-icons/io5";
import {
  BsSunrise,
  BsSunset,
  BsArrowUpShort,
  BsArrowDownShort,
} from "react-icons/bs";
import {
  fromUnixtimeToDayNumberAndYear,
  fromUnixTimeToLocalTime,
} from "../utils/dateFormatters";

type WeatherCardProps = ForeCastWeatherType;

const RealTimeWeather = ({ location, current, forecast }: WeatherCardProps) => {
  const conditionIconUrl = current.condition.icon.replace(
    "//cdn.weatherapi.com",
    ""
  );
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-4 pb-8">
        <p className="text-xl text-black dark:text-white">
          {fromUnixtimeToDayNumberAndYear(location.localtime_epoch)}
        </p>
        <p className="text-xl text-black dark:text-white">
          Local Time: {fromUnixTimeToLocalTime(location.localtime_epoch)}
        </p>
      </div>
      <div className="flex flex-col justify-center pb-8 text-center">
        <p className="text-4xl text-black dark:text-white">{location.name}</p>
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
        <p
          className={
            temperatureRangeColors(current.temp_c) + " text-4xl font-bold"
          }
        >
          {current.temp_c}°C
        </p>
      </div>
      <div className="center flex max-w-2xl flex-col items-center justify-center gap-2 self-center pb-2">
        <div className="flex flex-wrap justify-center gap-2 px-1 @md:gap-4">
          <div className="flex items-center gap-1 font-light">
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
          <div className="flex items-center gap-1 font-light">
            <FiWind className="text-2xl text-green-400" />
            <span className="text-xl text-black dark:text-white">
              Wind Speed:
            </span>
            <p className="text-xl font-medium text-black dark:text-white">
              {current.wind_kph} km/h
            </p>
          </div>
          <div className="flex items-center gap-1 font-light">
            <IoWater className="text-2xl text-blue-400" />
            <span className="text-xl text-black dark:text-white">
              Humidity:
            </span>
            <p className="text-xl font-medium text-black dark:text-white">
              {current.humidity}%
            </p>
          </div>
          <div className="flex items-center gap-1 font-light">
            <BsSunrise className="text-2xl text-yellow-400" />
            <span className="text-xl text-black dark:text-white">Rise:</span>
            <p className="text-xl font-medium text-black dark:text-white">
              {forecast.forecastday[0]?.astro.sunrise}
            </p>
          </div>
          <div className="flex items-center gap-1 font-light">
            <BsSunset className="text-2xl text-indigo-500" />
            <span className="text-xl text-black dark:text-white">Set:</span>
            <p className="text-xl font-medium text-black dark:text-white">
              {forecast.forecastday[0]?.astro.sunset}
            </p>
          </div>
          <div className="flex items-center gap-1 font-light">
            <BsArrowUpShort className="text-2xl text-black dark:text-white" />
            <span className="text-xl text-black dark:text-white">Max:</span>
            <p
              className={
                temperatureRangeColors(forecast.forecastday[0]?.day.maxtemp_c) +
                " text-xl font-medium"
              }
            >
              {forecast.forecastday[0]?.day.maxtemp_c}°C
            </p>
          </div>
          <div className="flex items-center gap-1 font-light">
            <BsArrowDownShort className="text-2xl text-black dark:text-white" />
            <span className="text-xl text-black dark:text-white">Min:</span>
            <p
              className={
                temperatureRangeColors(forecast.forecastday[0]?.day.mintemp_c) +
                " text-xl font-medium"
              }
            >
              {forecast.forecastday[0]?.day.mintemp_c}°C
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealTimeWeather;
