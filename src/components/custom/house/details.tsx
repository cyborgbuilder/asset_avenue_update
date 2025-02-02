import styled from "styled-components";
import { motion } from "framer-motion";
import { outToInVariantsRight } from "@/animations";

export const HouseDetails = () => {
  return (
    <Container>
      <h1 className="header">How does it work</h1>
      <Wrap>
        <Right>
          <RightWrap>
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
                    <strong>Find Your Dream Home:</strong> <br></br>Take the
                    lead in finding your perfect home, negotiate the price with
                    the seller, and then reach out to us.
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
                    <strong>Secure Your Property Rights:</strong> <br></br>{" "}
                    We'll create a unique NFT (Non-Fungible Token) granting you
                    usage rights to the property. Purchase the NFT using USDT,
                    and we'll promptly facilitate a wire transfer of your local
                    fiat currency.
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
                    <strong>Complete the Legal Process:</strong> <br></br>{" "}
                    Schedule a meeting with a trusted notary to finalize the
                    property purchase under Asset Avenue's name. While Asset
                    Avenue retains official ownership, you enjoy full usage
                    rights to the property.
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
                    <strong>Maximum Security:</strong> <br></br> A clause in the
                    purchase document will ensure that the property won’t ever
                    be able to get sold without the NFT holder's consent. If
                    public record inclusion is legally not possible in the
                    country of purchase, a private contract will enforce this
                    right, ensuring you always have full control over the
                    property, just as if you had bought the property with fiat
                    money in the traditional way in your name.
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
                    <strong>Benefits for You:</strong> <br></br>Experience the
                    ease of transferring ownership rights; for example,
                    inheriting the property involves simply transferring the
                    NFT, bypassing the complexities of legal procedures and
                    taxes. In the event of a divorce, your assets are
                    safeguarded as Asset Avenue holds the property title.
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
                    <strong>Sale of property:</strong> <br></br>Should you ever
                    decide to sell your property and regain your liquidity
                    instead of transferring the NFT, simply let us know. We'll
                    take care of all the details to facilitate the sale once
                    you've found a buyer.
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
                    <strong>Fees:</strong> <br></br>
                    <strong>Acquisition Fee:</strong> We charge a one-time 1%
                    fee of the purchase price, with the fee going directly to
                    the DAO.
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
                    <strong>Property Management Service:</strong> <br></br>
                    Covering property taxes, homeowner association fees, and
                    other ongoing costs will be managed directly by yourself. To
                    facilitate this, we offer a premium mail forwarding service,
                    ensuring all property-related correspondence is promptly
                    delivered to you for an annual fee of only 299€, with the
                    fee contributing to the DAO.
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
                    <strong>Dividends Await You:</strong> <br></br>Stake your
                    $AAV for 360 days to become a member of the DAO. Enjoy the
                    benefits of membership as 100% of the DAO's profits are
                    distributed to stakers.
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

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 0;
    width: 97%;
  }
`;

const Right = styled.div`
  width: 120%;

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 15px;
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
