import { FC } from "react";
import { ContentCard, ImageCard } from "@/components";
import { motion } from "framer-motion";
import { fadeUpVariants, outToInVariantsRight } from "@/animations";

const teamMembers = [
  {
    name: "Luis Ascorbe",
    position: "Tech Advisor - Jupiter",
    src: "/images/team/luis.png",
  },
  {
    name: "Shehryar Ali",
    position: "CTO - Audi , Lamborghini",
    src: "/images/team/she.png",
  },
  {
    name: "Dan",
    position: "Advisor - Influencer & Investor",
    src: "/images/team/Dan.png",
  },
  {
    name: "Isuru Senadeera",
    position: "Blockchain Developer & Web Developer",
    src: "/images/team/isuru.png",
  },
  {
    name: "Ricardo Zuñiga",
    position: "Construction Manager - 20+ years experience",
    src: "/images/team/rick.png",
  },
  {
    name: "Fiorella Castro",
    position: "Marketing",
    src: "/images/team/castro.png",
  },
];

export const Team: FC = () => {
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
        <h2 className="font-Helvetica text-center text-2xl font-semibold md:text-3xl xl:text-5xl">
          Our <span className="text-primary">Team</span>
        </h2>
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
            <h2 className="text-xl font-medium md:text-3xl xl:text-3xl">
              A Personal Message from Our{" "}
              <span className="text-primary">Founder</span>
            </h2>
            <p className="mb-4 text-xs font-semibold text-primary">
              Entrepreneur and Expert in Real Estate Investments
            </p>

            <p className="mb-2">
              Welcome to Asset Avenue, where real estate investment meets the
              blockchain. I'm Daniel Alexander Foreich, and I've personally
              witnessed the transformative power of real estate investments. My
              mission is to democratize real estate investment, ensuring
              everyone can participate and benefit.
            </p>
            <p className="mb-2">
              At Asset Avenue, we offer total transparency through our DAO,
              allowing everyone to become a member and receive dividends. We are
              committed to distributing 100% of the company's profits to DAO
              members, ensuring maximum security for all NFT owners.
            </p>
            <p className="">
              To align interests, Asset Avenue invests alongside our investors
              in projects and I personally stand behind every project we offer
              on the platform, ensuring trust and confidence in our investments.
              Join us and start investing in real estate without leaving the
              blockchain.
            </p>
            <div className="mt-3 flex justify-end">
              <div className="">
                <img src="/images/team/sign.webp" alt="sign" className="w-32" />
                <p className="text-xs font-medium text-primary">
                  Daniel Alexander Froreich.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* content 2 */}
        <div className="mt-20 flex w-full flex-wrap justify-center gap-8 px-3 xl:gap-8 xl:px-0">
          {teamMembers.map((member, index) => (
            <div className="w-full max-w-80 xl:max-w-[14.5rem]" key={index}>
              <ContentCard src={member.src} cardClassName="xl:h-48">
                <div className="pb- flex min-h-12 flex-col items-center">
                  <p className="text-xs font-bold">{member.name}</p>
                  <p className="text-center text-xxxs font-medium">
                    {member.position}
                  </p>
                </div>
              </ContentCard>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
