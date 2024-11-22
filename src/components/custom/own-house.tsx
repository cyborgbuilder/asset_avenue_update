import { FC } from "react";
import { Button, ImageCard } from "@/components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpVariants, outToInVariantsRight } from "@/animations";

export const OwnHouse: FC = () => {
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
          Buy Your Own House with{" "}
          <span className="text-primary">Cryptocurrency</span>
        </h2>
        {/* content */}
        <div className="mb-10 mt-10 flex w-full flex-col gap-8 px-3 md:flex-row xl:gap-x-12">
          <div className="flex w-full justify-start md:w-1/2">
            <ImageCard
              src="/images/own_house_with_crypto.jpg"
              className="h-[28rem] w-full md:max-w-xl"
            />
          </div>
          <motion.div
            variants={outToInVariantsRight}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col justify-center md:w-1/2"
          >
            <ul className="list-disc ps-10 md:ps-6 xl:text-lg">
              <li className="py-1">Simple and transparent process</li>
              <li className="py-1">
                Maximum security through NFT usage and selling rights
              </li>
              <li className="py-1">
                Total future transparency through DAO governance
              </li>
              <li className="py-1">Purchase on the blockchain</li>
              <li className="py-1">Complete control over your property</li>
              <li className="py-1">Sell whenever you want</li>
              <li className="py-1">
                {" "}
                Inherit and transfer easily to anyone at almost no cost
              </li>
            </ul>
            <p className="">
              Let our expertise and seamless process make it happen for you.
            </p>
            <Link to="/house" className="w-fit self-center md:self-start">
              <Button className="mt-5 rounded-[10px] bg-brand-100 px-[25px] py-[20px] uppercase">
                See More
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
