import { FC } from "react";
import styled from "styled-components";
import { projectData } from "@/data/project-data";
import { Link } from "react-router-dom";
import { ContentCard } from "@/components";
import { motion } from "framer-motion";
import { fromTopToBottomVariants } from "@/animations";

type ResellProjectProps = {
  header?: string;
  sub?: string;
  paddingContainer?: string;
  paddingContainerMobile?: string;
};

export const ResellProject: FC<ResellProjectProps> = ({
  header,
  sub,
  paddingContainer,
  paddingContainerMobile,
}) => {
  return (
    <Container
      paddingContainer={paddingContainer}
      paddingContainerMobile={paddingContainerMobile}
    >
      <motion.h2
        style={{ margin: "0" }}
        className="header"
        variants={fromTopToBottomVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {header}
      </motion.h2>

      <motion.h3
        className="mt-2 text-center text-sm font-medium tracking-widest font-Helvetica"
        variants={fromTopToBottomVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {sub}
      </motion.h3>

      <div className="mb-10 mt-10 grid w-full grid-cols-1 gap-5 px-3 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ContentCard
            key={index}
            src={project.src}
            topChildren={project.topChildren}
          >
            <div className="flex w-full flex-col items-center px-1 py-3">
              <h3 className="text-center text-sm font-semibold">
                {project.topic}
              </h3>
              <h4 className="text-xxxs font-medium">{project.description}</h4>

              <div className="flex w-full items-center justify-between text-xxs">
                <h2>Shares Available:</h2>
                <h3>{project.available}</h3>
              </div>
              <div className="flex w-full items-center justify-between text-xxs">
                <h2>APR:</h2>
                <h3>{project.apr}</h3>
              </div>
              <div className="flex w-full items-center justify-between text-xxs">
                <h2>Minimum Purchase:</h2>
                <h3>10 Shares | 12 USDT</h3>
              </div>
              <div>
                <Link to="/resale-asset" className="text-xxs">
                  More info
                </Link>
              </div>
            </div>
          </ContentCard>
        ))}
      </div>
    </Container>
  );
};
const Container = styled.div<ResellProjectProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: ${(props) => props.paddingContainer};
  overflow: hidden;
  
  @media only screen and (max-width: 1200px) {
    padding: ${(props) => props.paddingContainerMobile};
  }
`;
