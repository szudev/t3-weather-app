import Image from "next/image";
import { type InferQueryOutput } from "../pages/api/trpc/[trpc]";

interface WeatherCarouselProps {
  images: string[];
}

const WeatherCarousel = ({ images }: WeatherCarouselProps) => {
  return (
    <div className="m-auto flex max-w-5xl">
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
