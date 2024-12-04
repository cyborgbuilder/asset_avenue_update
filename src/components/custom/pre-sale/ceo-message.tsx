import { ImageCard } from "@/components";
import { motion } from "framer-motion";
import { fadeUpVariants, outToInVariantsRight } from "@/animations";

export const CeoMessage = () => {
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
        {/* content */}
        <div className="mb-10 mt-10 flex w-full flex-col gap-8 px-3 md:flex-row xl:gap-12">
          <div className="flex w-full items-center justify-center md:w-1/2 md:justify-start lg:w-2/5">
            <ImageCard
              className="h-[30rem] w-full max-w-md"
              src="/images/team/investor.png"
            />
          </div>
          <motion.div
            variants={outToInVariantsRight}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex w-full flex-col justify-center md:w-1/2 lg:w-3/5"
          >
            <h2 className="py-4 text-xl font-medium md:text-3xl xl:text-3xl">
              Welcome to <span className="text-primary">Asset Avenue</span> !
            </h2>
            <p className="mb-4">
              Our mission is to make real estate investing secure, transparent,
              and accessible for everyone. Using blockchain, we’ve created a
              platform where you can:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>Purchase and manage real estate worldwide.</li>
              <li>Invest alongside industry experts in lucrative projects.</li>
              <li>Earn rental income in fiat directly to your bank account.</li>
            </ul>
            <p className="mb-4">
              With our token, you’ll gain exclusive access to DAO voting,
              company shares, and dividends. Backed by legal experts and
              cutting-edge AI tools, we’re here to help you confidently execute
              real estate deals globally.
            </p>
            <p className="mb-4 font-bold">
              Join us now during our private seed sale at $0.05/token! Don’t
              miss our DEX launch at $0.14 on January 15th.
            </p>
            <p>Let’s revolutionize real estate together!</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
