import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { type AppProps } from "next/app";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
