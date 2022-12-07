import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "../../../env/server.mjs";
import { createContext } from "../../../server/trpc/context";
import { appRouter } from "../../../server/trpc/router/_app";
import { type AppRouter } from "../../../server/trpc/router/_app";
import { type inferProcedureOutput } from "@trpc/server";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(`❌ tRPC failed on ${path}: ${error}`);
        }
      : undefined,
});

export type InferQueryOutput<
  TRouteKey extends keyof AppRouter["_def"]["procedures"]["realTimeWeather"]
> = inferProcedureOutput<
  AppRouter["_def"]["procedures"]["realTimeWeather"][TRouteKey]
>;
