import { type OnlyForecastWeatherType } from "../types/foreCastWeatherType";
import temperatureRangeColors from "../utils/temperatureRange";
import Image from "next/image";

type ForecastWeatherProps = OnlyForecastWeatherType;

const ForecastWeather = ({ forecast }: ForecastWeatherProps) => {
  return (
    <>
      <div className="mt-6 flex items-center justify-center">
        <p className="font-medium uppercase text-black dark:text-white">
          Hourly Forecast
        </p>
      </div>
      <hr className="my-2" />
      <div className="flex max-w-2xl items-center justify-between gap-4 overflow-x-auto scroll-smooth whitespace-nowrap text-black @container scrollbar-hide dark:text-white">
        {forecast.forecastday[0]?.hour.map((hour, index) => {
          return (
            <div
              className="flex flex-col items-center justify-center"
              key={index}
            >
              <p className="text-sm font-light">{hour.time_epoch}</p>
              <Image
                alt={hour.condition.text}
                height={60}
                width={60}
                src={hour.condition.icon.replace("//cdn.weatherapi.com", "")}
              />
              <p className={temperatureRangeColors(hour.temp_c)}>
                {hour.temp_c}°C
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ForecastWeather;
