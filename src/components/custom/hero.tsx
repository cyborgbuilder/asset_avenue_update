import { FC } from "react";
import { Link } from "react-router-dom";
import { Button, ImageCard } from "@/components";

export const Hero: FC = () => {
  return (
    <section className="-mt-10 flex h-full w-full max-w-7xl flex-col items-center justify-center gap-10 px-3 md:flex-row xl:px-0">
      {/* left side */}
      <div className="flex h-full w-full flex-col items-center justify-center md:w-1/2 md:items-start">
        <h1 className="xl:leading-[75px] text-center font-Helvetica text-3xl font-semibold md:text-start md:text-4xl xl:text-6xl">
          Buy{" "}
          <span className="text-4xl text-primary md:text-5xl xl:text-6.5xl">
            Real Estate
          </span>{" "}
          with crypto worldwide
        </h1>
        <p className="mt-4 xl:text-xl">
          Invest in passive income generating assets alongside experts or
          purchase your own real estate anywhere in the world.
        </p>
        <div className="mt-5 flex w-full flex-col items-center gap-x-6 gap-y-3 lg:flex-row">
          <Link to="/market">
            <Button className="rounded-[10px] bg-brand-100 px-[25px] py-[20px] !text-xxs font-bold uppercase">
              Passive Income Projects
            </Button>
          </Link>
          <Link to="/house">
            <Button className="rounded-[10px] bg-white px-[25px] py-[20px] !text-xxs font-bold uppercase text-black hover:text-white">
              Buy Your Own House
            </Button>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div className="w-full md:flex md:w-1/2 xl:justify-end">
        <ImageCard
          src="/images/house.jpeg"
          imageClassName="grayscale-[0.5] object-right"
          className="h-96 w-full md:h-96 md:w-96 lg:h-[26rem] xl:h-[35rem] xl:w-[30rem]"
        />
      </div>
    </section>
  );
};
