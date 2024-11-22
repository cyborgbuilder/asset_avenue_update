import { FC } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  ImageCard,
} from "@/components";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/animations";

const imageDetails = [
  {
    src: "/images/invest/asia.png",
    alt: "Asia",
    text: "Asia",
  },
  {
    src: "/images/invest/australia.png",
    alt: "Australia",
    text: "Australia",
  },
  {
    src: "/images/invest/europe.png",
    alt: "Europe",
    text: "Europe",
  },
  {
    src: "/images/invest/middle-east.png",
    alt: "Middle East",
    text: "Middle East",
  },
  {
    src: "/images/invest/asia.png",
    alt: "Asia",
    text: "Asia",
  },
  {
    src: "/images/invest/australia.png",
    alt: "Australia",
    text: "Australia",
  },
];

export const Invest: FC = () => {
  return (
    <section>
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        className="flex flex-col items-center justify-center"
      >
        {/* title */}
        <h2 className="text-center font-Helvetica text-2xl font-semibold md:text-3xl xl:text-5xl">
          <span className="text-primary"> Invest and Buy</span> Worldwide
        </h2>
        {/* content */}
        <div className="mb-10 mt-10 flex w-full flex-col items-center gap-8 px-3">
          <p className="text-center">
            At Asset Avenue, empowerment is at the heart of what we do. Our
            mission is to empower individuals like you by granting access to
            genuine passive income streams and the opportunity to securely
            invest in real estate for personal use. Whether you're a seasoned
            investor or just starting out, your goals are aligned with ours, and
            together we will revolutionize the real estate market. On our
            platform, you'll discover premier investment opportunities
            meticulously selected from the market.
          </p>
          <p className="text-center">
            Partner with us to invest in our curated projects or explore
            offerings from globally renowned real estate experts. Each
            opportunity is carefully vetted to ensure optimal returns for our
            investors, and we're proud to also provide the option to purchase
            your dream home using cryptocurrency. Our team is available to
            assist you in investing in real estate anywhere in the world,
            ensuring that your investment goals are met with expertise and
            support.
          </p>

          {/* cards */}
          <Carousel>
            <CarouselContent className="-ml-1 mb-20">
              {imageDetails.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="p-3 pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="relative h-60 w-full max-w-full overflow-visible">
                    <ImageCard
                      className="h-full w-full"
                      imageClassName=""
                      src={image.src}
                    />
                    <p className="absolute bottom-0 start-0 flex h-full w-full items-end justify-center rounded-b-[60px] bg-gradient-to-b from-transparent via-transparent to-black pb-2 text-center text-lg font-medium">
                      {image.text}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots className="-mt-10" />
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};
