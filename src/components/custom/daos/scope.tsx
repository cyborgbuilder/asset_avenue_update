import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { outToInVariantsRight } from "@/animations";

export const Scope = () => {
  return (
    <Container>
      <Wrap>
        <Right>
          <motion.h2
            variants={outToInVariantsRight}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg font-semibold text-brand-100 md:text-xl xl:text-2xl"
          >
            Scope of Activities:
          </motion.h2>
          <motion.ul
            variants={outToInVariantsRight}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="activities !text-sm"
          >
            <li>Acquiring and managing properties worldwide.</li>
            <li>
              Issuing NFTs that represent usage rights or investment shares in
              properties.
            </li>
            <li>
              Offering security to home buyers through the NFT and selling
              clauses.
            </li>
            <li>Managing properties and distributing income to investors.</li>
            <li>
              Implementing and maintaining a decentralized governance system for
              decision-making and profit distribution.
            </li>
          </motion.ul>
        </Right>
        <Left>
          <motion.img
            variants={outToInVariantsRight}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="/images/coin.webp"
            alt="icon"
            className="pointer-events-none"
          />
        </Left>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  background: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;

  @media only screen and (max-width: 1200px) {
    padding: 0;
    min-height: 35rem;
  }

  @media only screen and (max-width: 600px) {
    min-height: 40rem;
  }
`;

const Wrap = styled.div`
  width: 85%;
  height: 100%;
  display: flex;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 30px 8px;
    width: 100%;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  position: relative;

  img {
    width: 500px;
    border-radius: 15px;
    position: absolute;
    top: -60px;
    right: -20%;
    animation: ${floatAnimation} 5s ease-in-out infinite;

    @media only screen and (max-width: 1200px) {
      width: 300px;
      top: 20px;
      right: calc(50% - 150px);
    }
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .activities {
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
    padding: 0 30px;
  }
`;
