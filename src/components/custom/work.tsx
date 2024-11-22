import { FC } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, outToInVariantsLeft } from "@/animations";

export const Work: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      {/* title */}
      <h2 className="font-Helvetica px-2 text-center text-2xl font-semibold sm:px-0 md:text-3xl xl:text-5xl">
        Investing made easy on the{" "}
        <span className="text-primary">Blockchain</span>
      </h2>

      {/* content */}
      <div className="mt-5 flex flex-col items-center justify-center px-2 md:flex-row">
        {/* left side */}
        <motion.div
          variants={outToInVariantsLeft}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex w-full justify-center md:w-1/2 md:justify-end xl:w-2/5"
        >
          <motion.img
            src="/images/coin.webp"
            alt="coin"
            animate={{ rotateZ: 360, autoReverse: false }}
            transition={{
              ease: "linear",
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ originX: 0.5 }}
            className="pointer-events-none max-w-sm lg:max-w-lg"
          />
        </motion.div>
        {/* right side */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="flex w-full flex-col gap-y-6 px-4 md:w-1/2 xl:w-3/5 xl:gap-y-10"
        >
          <div className="flex items-center gap-x-5 xl:gap-x-8">
            <img
              src="/images/small_coin_1.svg"
              alt="coin"
              className="pointer-events-none max-w-14 xl:max-w-20"
            />
            <p className="xl:text-lg">
              Stake our native <span className="text-primary">$AAV</span> token.
            </p>
          </div>
          <div className="flex items-center gap-x-5 md:ps-6 xl:gap-x-8 xl:ps-10">
            <img
              src="/images/small_coin_2.svg"
              alt="coin"
              className="pointer-events-none max-w-14 xl:max-w-20"
            />
            <p className="xl:text-lg">
              Invest in Real Estate worldwide with{" "}
              <span className="text-primary">USDT</span>.
            </p>
          </div>
          <div className="flex items-center gap-x-5 md:ps-6 xl:gap-x-8 xl:ps-10">
            <img
              src="/images/small_coin_3.svg"
              alt="coin"
              className="pointer-events-none max-w-14 xl:max-w-20"
            />
            <p className="xl:text-lg">
              Receive monthly rental income in{" "}
              <span className="text-primary">Local Flat Currency</span> or
              Crypto
            </p>
          </div>
          <div className="flex items-center gap-x-5 xl:gap-x-8">
            <img
              src="/images/small_coin_4.svg"
              alt="coin"
              className="pointer-events-none max-w-14 xl:max-w-20"
            />
            <p className="xl:text-lg">
              Resell your Real State Assets{" "}
              <span className="text-primary">anytime</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
