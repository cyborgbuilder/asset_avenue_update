import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { outToInVariantsLeft, outToInVariantsRight } from "@/animations";

export const ButtonPage = () => {
  return (
    <Container>
      <ButtonWrap>
        <Link
          to="/market"
          className="m-2 w-full"
        >
          <motion.button
            variants={outToInVariantsLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-[1] w-full overflow-hidden rounded-md border-2 border-brand-100 px-4 py-1 after:absolute after:inset-0 after:-z-10 after:translate-y-full after:bg-brand-100 after:duration-300 hover:after:translate-y-0"
          >
            Invest in passive income assets
          </motion.button>
        </Link>
        <Link to="/house" className="m-2 w-full">
          <motion.button
            variants={outToInVariantsRight}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative z-[1] w-full overflow-hidden rounded-md border-2 border-brand-100 px-4 py-1 after:absolute after:inset-0 after:-z-10 after:translate-y-full after:bg-brand-100 after:duration-300 hover:after:translate-y-0"
          >
            Buy your own house
          </motion.button>
        </Link>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 8px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
