import { type NextPage } from "next";
import { trpc } from "../utils/trpc";
import { useEffect, useState } from "react";
import { setDefaultTheme, setDefaultThemeState } from "../utils/darkTheme";
import Header from "../components/Header";
import WeatherCarousel from "../components/WeatherCarousel";
import LoadingSpinner from "../components/LoadingSpinner";
import { images } from "../utils/images";
import WeatherCard from "../components/WeatherCard";

const Weather: NextPage = () => {
  const { data: defaultWeather, isLoading } =
    trpc.realTimeWeather.getDefaultWeather.useQuery();
  const [darkMode, setDarkMode] = useState<boolean | undefined>(
    setDefaultThemeState()
  );
  useEffect(() => {
    setDefaultTheme();
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col bg-white px-4 pb-4 dark:bg-black">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      {!isLoading && defaultWeather ? (
        //<WeatherCarousel images={images} />
        <WeatherCard
          location={defaultWeather.location}
          current={defaultWeather.current}
        />
      ) : (
        <LoadingSpinner />
      )}
    </main>
  );
};

export default Weather;
