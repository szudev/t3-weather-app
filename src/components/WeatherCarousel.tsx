import Image from "next/image";
import { type InferQueryOutput } from "../pages/api/trpc/[trpc]";

type dataFromServer = InferQueryOutput<"getDefaultWeather">;

const WeatherCarousel = (defaultWeather: dataFromServer) => {
  console.log(defaultWeather);
  const images = [
    "/weather-conditions/sunny.jpg",
    "/weather-conditions/rainy.jpg",
    "/weather-conditions/foggy.jpg",
    "/weather-conditions/snowy.jpg",
    "/weather-conditions/cloudy.jpg",
  ];

  return (
    <div className="mx-auto my-auto flex max-w-5xl">
      <div className="flex">
        <Image
          src={images[0] as string}
          alt=""
          style={{
            userSelect: "none",
          }}
          className="rounded-2xl object-cover"
          quality={100}
          width={1920}
          height={1080}
          priority
        />
      </div>
    </div>
  );
};

export default WeatherCarousel;
