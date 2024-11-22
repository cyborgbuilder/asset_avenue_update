import styled from "styled-components";
import { motion } from "framer-motion";
import { outToInVariantsLeft, outToInVariantsRight } from "@/animations";

export const Feedback = () => {
  return (
    <Container>
      <h1 className="header">How does it work</h1>
      <Wrap>
        <Left>
          <motion.img
            variants={outToInVariantsLeft}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            src="./images/coin.png"
            className="pointer-events-none"
          />
        </Left>
        <Right>
          <RightWrap>
            <motion.p
              variants={outToInVariantsRight}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="py-10"
            >
              Welcome to our investment process at Asset Avenue, where we strive
              to make real estate investment accessible and transparent. Here's
              how it works:
            </motion.p>
            <ul className="customList">
              <div>
                <motion.li
                  variants={outToInVariantsRight}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="ms-5 py-5 text-sm">
                    <strong>Stake Your AAV Tokens:</strong> <br></br>Begin by
                    staking your AAV Tokens for a minimum of 6 months. While
                    staked, you gain access to invest in multiple projects. The
                    maximum investable amount across all projects depends on
                    your staked token quantity. Throughout this period, you'll
                    receive dividends not only from your investments but also
                    from the company's overall benefits. Additionally, you'll
                    receive comprehensive company reports detailing performance
                    and future plans. Upon unstaking, however, you forfeit the
                    ability to invest in further projects and lose the
                    associated benefits.
                  </h3>
                </motion.li>
              </div>

              <div>
                <motion.li
                  variants={outToInVariantsRight}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="ms-5 py-5 text-sm">
                    <strong>Investment Opportunities:</strong> <br></br> When we
                    identify promising investment opportunities, we publish them
                    on our website, providing you with full asset details. Each
                    asset offers a limited number of shares available for
                    purchase by our stakers. Your share purchase grants you a
                    percentage of the asset's rental income, along with access
                    to tenant data and rent contracts for transparency. Upon
                    purchase, you'll receive a contract outlining your revenue
                    rights and an NFT indicating your share ownership in the
                    asset.
                  </h3>
                </motion.li>
              </div>

              <div>
                <motion.li
                  variants={outToInVariantsRight}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="ms-5 py-5 text-sm">
                    <strong>Receive Rent Dividends:</strong> <br></br> Once
                    you've purchased shares, you'll begin receiving monthly rent
                    dividends. These dividends can be received in fiat currency
                    to your bank account or in USDT to your designated wallet.
                    If the asset is sold, you'll receive a percentage of the
                    sales price based on your ownership percentage.
                  </h3>
                </motion.li>
              </div>

              <div>
                <motion.li
                  variants={outToInVariantsRight}
                  initial="hidden"
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="ms-5 py-5 text-sm">
                    <strong>Investor Resale Hub:</strong> <br></br> Should you
                    wish to liquidate your shares and reclaim your liquidity,
                    you can sell your NFT on our Investor Resale Hub.
                  </h3>
                </motion.li>
              </div>
            </ul>
          </RightWrap>
        </Right>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 70vh;
  over-flow: hidden;
  position: relative;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrap = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  padding: 50px 0;
  margin-left: 250px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    width: 95%;
    padding: 0;
    margin-left: 0px;
  }
`;
const Left = styled.div`
  width: 82%;
  position: absolute;
  left: -20%;
  top: 10%;
  z-index: 1;
  display: flex;
  justify-content: center;
  //padding: 100px 0;

  @media only screen and (max-width: 1200px) {
    position: sticky;
    width: 100%;
  }

  img {
    width: 100%;
    animation: rotation 10s infinite linear;
  }
`;
const Right = styled.div`
  width: 100%;
  z-index: 1;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 5px;
  }
`;
const RightWrap = styled.div`
  width: 100%;
  height: 100%;
  z-index: 2;
  padding: 40px 0;

  @media only screen and (max-width: 1200px) {
    padding: 0;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  div {
    min-height: 150px;
    border-left: 2px solid #3fac55;
    position: relative;
  }

  ul.customList {
    list-style-type: none; /* Remove default bullets */
    padding: 0;
  }

  ul.customList li {
    padding-left: 20px;
    padding-top: 5px;
  }

  ul.customList li::before {
    content: "•";
    color: #3fac55;
    font-size: 50px;
    position: absolute;
    left: -11px;
    top: 0;
  }
`;
