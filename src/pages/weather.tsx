import { type NextPage } from "next";
import { trpc } from "../utils/trpc";
import { useState } from "react";
import { setDefaultTheme, setDefaultThemeState } from "../utils/darkTheme";
import Header from "../components/Header";
import WeatherCarousel from "../components/WeatherCarousel";

const Weather: NextPage = () => {
  const defaultWeather = trpc.realTimeWeather.getDefaultWeather.useQuery();
  const [darkMode, setDarkMode] = useState<boolean | undefined>(
    setDefaultThemeState()
  );
  setDefaultTheme();

  if (!defaultWeather.data) return <span>Loading...</span>;

  return (
    <main className="flex min-h-screen w-full flex-col bg-white p-4 @container dark:bg-black">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <WeatherCarousel />
    </main>
  );
};

export default Weather;
