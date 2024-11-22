import styled from "styled-components";
import { motion } from "framer-motion";
import { outToInVariantsRight } from "@/animations";

export const HowToWork = () => {
  return (
    <Container>
      <h1 className="header">How the DAO Works</h1>
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
                    <strong>Governance and Voting:</strong> <br />
                    Investors who stake their tokens for 360 days receive voting
                    rights and company dividends. Each staker has one vote,
                    regardless of the amount staked. DAO members vote on
                    important company decisions, such as dividend distributions
                    and major operational changes. Members have access to
                    private company online meetings, records, and reports.
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
                    <strong>Property Usage Rights:</strong> <br />
                    Holders of NFTs issued by the DAO have exclusive usage
                    rights to specific properties. They can rent, live in, or
                    leave the property empty. The company will include a clause
                    in the purchase document stating that the property cannot be
                    sold without the NFT holder's consent. If public record
                    inclusion is legally not possible in the country where the
                    property is bought, a private contract will enforce this
                    right.
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
                    <strong>Transaction Details:</strong> <br />
                    When a buyer acquires an NFT from the company, the company
                    purchases the real estate asset. The NFT grants the holder
                    exclusive usage rights, which the company must respect and
                    enforce. The NFT holder can list the property for sale, and
                    the DAO and company will facilitate the sale process.
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
                    <strong>Passive Income Assets:</strong> <br />
                    The company's administration decides on the sale of
                    properties listed as Passive Income Assets. Proceeds from
                    the sale of these properties are distributed to investors by
                    purchasing their NFTs representing shares in the asset.
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
                    <strong>Property Management:</strong> <br />
                    The company manages the properties, ensuring maintenance and
                    income generation. Management fees vary depending on the
                    asset and are set by the company.
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
                    <strong>Income Distribution:</strong> <br />
                    Income from rental properties is distributed to investors
                    holding relevant NFTs according to the terms specified in
                    the smart contracts. 100% of the company's benefits are
                    distributed to the DAO and shared with members based on
                    their staking percentage. Undistributed amounts remain in
                    the company as reserves for future payouts, bonuses,
                    repairs, etc.
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
                    <strong>Legal Compliance:</strong> <br />
                    The company complies with all applicable laws and
                    regulations related to property ownership and transactions.
                    The company aims to record NFT usage rights in public
                    property records to grant maximum security to NFT holders.
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
  width: 100%;

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
    list-style-type: none;
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
