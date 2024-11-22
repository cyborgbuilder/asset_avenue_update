import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components";
import { motion } from "framer-motion";
import { fadeUpVariants, outToInVariantsLeft } from "@/animations";

export const DAO: FC = () => {
  return (
    <section className="">
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        className="flex flex-col items-center justify-center"
      >
        {/* content */}
        <div className="my-10 flex w-full flex-col gap-8 px-3 md:flex-row">
          <motion.div
            variants={outToInVariantsLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col justify-center md:w-3/5"
          >
            {/* title */}
            <h2 className="mb-10 font-Helvetica text-2xl font-semibold md:text-3xl xl:text-5xl">
              Asset Avenue <span className="text-primary">DAO</span>
            </h2>

            <p className="text-lg leading-[32px]">
              Facilitating worldwide real estate transactions with
              cryptocurrency, ensuring the highest level of security and
              complete transparency in ownership and investment opportunities
              through blockchain technology.
            </p>
            <ul className="list-disc ps-10 md:ps-6 xl:ps-14 xl:text-lg">
              <li className="py-1">
                Buy real estate properties with cryptocurrency worldwide.
              </li>
              <li className="py-1">
                Invest in passive income generating real estate with
                professional management.
              </li>
              <li className="py-1">
                Operate with maximum security and rights of property usage
                through NFTs.
              </li>
              <li className="py-1">
                Transfer your assets with ease in case of inheritance or any
                other reason.
              </li>
              <li className="py-1">Receive profits from the DAO.</li>
            </ul>
            <Link to="/dao" className="w-fit self-center md:self-start">
              <Button className="mt-5 rounded-[10px] px-[25px] py-[20px] uppercase">
                Access DAO
              </Button>
            </Link>
          </motion.div>
          <div className="flex w-full items-center justify-center md:w-2/5 md:justify-start">
            <video
              src="/videos/world.mp4"
              className="-z-[12] h-96 w-96"
              autoPlay
              playsInline
              loop
              muted
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
