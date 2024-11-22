import { FC } from "react";
import styled from "styled-components";
import { projectData } from "@/data/project-data";
import { ContentCard } from "../content-card";
import { Progress } from "@/components";
import { Link } from "react-router-dom";
import { fromBottomToTopVariants, fromTopToBottomVariants } from "@/animations";
import { motion } from "framer-motion";

export const AvailableProjects = () => {
  return (
    <Container>
      <motion.h2
        className="header"
        variants={fromTopToBottomVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Available Projects
      </motion.h2>

      <div className="mb-10 mt-10 grid w-full grid-cols-1 gap-5 px-3 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ContentCard
            key={index}
            src={project.src}
            topChildren={project.topChildren}
          >
            <CardDetails
              topic={project.topic}
              description={project.description}
              price={project.price}
              available={project.available}
              pricePerShare={project.pricePerShare}
              apr={project.apr}
              soldPercentage={project.soldPercentage}
              link={project.link}
            />
          </ContentCard>
        ))}
      </div>

      <motion.button
        className="rounded-[10px] bg-brand-100 px-20 py-[15px] text-xs font-semibold uppercase hover:bg-green-600"
        variants={fromBottomToTopVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        See More
      </motion.button>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 20px 0;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 0;
  }

  button {
    margin: 20px 0;
  }
`;

const CardDetails: FC<{
  topic: string;
  description: string;
  price: number | string;
  available: number;
  pricePerShare: number;
  apr: number;
  soldPercentage: number;
  link: string;
}> = ({
  topic,
  description,
  price,
  available,
  pricePerShare,
  apr,
  soldPercentage,
  link,
}) => {
  return (
    <div className="flex w-full flex-col items-center">
      <h3 className="text-center text-sm font-semibold">{topic}</h3>
      <h4 className="text-xxxs font-medium">{description}</h4>
      <div className="flex w-full justify-between gap-x-2 pb-2 pt-4">
        <div className="flex flex-col items-center text-xxxs font-semibold">
          <p className="">Price:</p>
          <p className="text-base font-semibold text-black">
            {price.toLocaleString()}
          </p>
          <p className="font-normal uppercase">USDT</p>
        </div>
        <div className="flex flex-col items-center text-xxxs font-semibold">
          <p className="">Available:</p>
          <p className="text-base font-semibold text-black">{available}</p>
          <p className="font-normal uppercase">Shares</p>
        </div>
        <div className="flex flex-col items-center text-xxxs font-semibold">
          <p className="">Price / Share:</p>
          <p className="text-base font-semibold text-black">{pricePerShare}</p>
          <p className="font-normal uppercase">USDT</p>
        </div>
        <div className="flex flex-col items-center text-xxxs font-semibold">
          <p className="">APR:</p>
          <p className="text-base font-semibold text-black">{apr}</p>
          <p className="font-normal uppercase">Percent</p>
        </div>
      </div>
      <div className="relative w-full rounded-sm py-3">
        <Progress
          value={soldPercentage}
          className="h-5 w-full rounded-sm bg-white"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xxs font-medium text-green-500">
          {soldPercentage}% Sold
        </span>
      </div>
      <Link to={link} className="text-xxs text-black">
        Coming Soon
      </Link>
    </div>
  );
};
