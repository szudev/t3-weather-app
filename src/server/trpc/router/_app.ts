import { router } from "../trpc";
import { realTimeWeatherRouter } from "./realTimeWeather";

export const appRouter = router({
  realTimeWeather: realTimeWeatherRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
