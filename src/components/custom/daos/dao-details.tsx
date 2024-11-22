import styled from "styled-components";
import { motion } from "framer-motion";
import { outToInVariantsLeft, outToInVariantsRight } from "@/animations";

export const DAODetails = () => {
  return (
    <Container>
      <h1 className="header">Asset Avenue DAO</h1>
      <h1 className="mb-8 mt-10 text-center text-base font-semibold md:text-lg xl:text-xl">
        Enabling global real estate transactions using cryptocurrency, providing
        maximum security and total transparency in ownership and investment
        opportunities through blockchain technology.
      </h1>
      <Wrap>
        <Left>
          <motion.video
            variants={outToInVariantsLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/videos/world.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </Left>
        <Right>
          <motion.h2
            variants={outToInVariantsRight}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg font-semibold text-brand-100 md:text-xl xl:text-2xl"
          >
            Objectives:
          </motion.h2>
          <motion.ul
            variants={outToInVariantsRight}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="objectives !text-sm"
          >
            <li>
              Facilitate the purchase of residential properties with
              cryptocurrency.
            </li>
            <li>
              Offer a platform for passive real estate investment with
              professional management.
            </li>
            <li>
              Ensure maximum security and rights of property usage through NFTs.
            </li>
            <li>
              Provide an easy way to transfer your asset in case of inheritance.
            </li>
            <li>Distribute 100% of the profits to DAO members.</li>
          </motion.ul>
        </Right>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 50vh;
  overflow: hidden;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 60px;

  @media only screen and (max-width: 600px) {
    padding: 0 8px;
    padding-top: 50px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 30px 0;
    width: 100%;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    width: 80%;
    height: 100%;
    object-fit: cover;
    max-height: 500px;
    max-width: 500px;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 55%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .objectives {
    margin-top: 15px;
    font-size: 1.1em;
    color: #ffffff;
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      padding-left: 1.5em;

      @media only screen and (max-width: 1200px) {
        text-align: left;
        padding: 0;
      }

      &:before {
        content: "";
        background: #3fac55;
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        margin-left: -1.5rem;
        margin-right: 1rem;
        border-radius: 50%;
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
    text-align: center;
    padding: 0 40px;
  }
`;
