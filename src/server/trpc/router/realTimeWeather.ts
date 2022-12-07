import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { apiOptions } from "../../../utils/apiOptions";

export const realTimeWeatherRouter = router({
  getDefaultWeather: publicProcedure.query(async () => {
    const weather = await fetch(
      "https://weatherapi-com.p.rapidapi.com/current.json?q=Santiago",
      apiOptions
    );

    return weather.json();
  }),
});
