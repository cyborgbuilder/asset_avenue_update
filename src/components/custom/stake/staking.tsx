import { Link } from "react-router-dom";
import styled from "styled-components";

export const Staking = () => {
  return (
    <Container>
      <Wrap>
        <Left>
          <h1 className="header">Stake your $AAV</h1>
          <ul className="list-disc text-base font-medium md:text-lg ms-4">
            <li>
              <p className="mt-2">Become a partner in our company.</p>
            </li>
            <li>
              <p className="mt-2">
                Receive dividends from Asset Avenue.
              </p>
            </li>
            <li>
              <p className="mt-2">
                Receive access to upcoming projects before they are published.
              </p>
            </li>
          </ul>
          <h2 className="mb-4 mt-8">
            <Link
              to="https://app.uniswap.org/"
              className="mt-2 w-full rounded-[10px] bg-brand-100 px-[40px] py-[15px] text-xs font-semibold uppercase hover:bg-green-600"
            >
              BUY $AAV{" "}
            </Link>
          </h2>
          <div className="mt-8 font-medium">
            AVAILABLE ON: <br></br>
            <a
              href="https://app.uniswap.org/"
              className="flex w-60 justify-center xl:justify-start"
            >
              <img src="./images/jupiterLogo.png" />
            </a>
          </div>
        </Left>
        <Right>
          <Slot>
            <div className="">
              <h2 className="text-2xl font-medium">180 Days</h2>
              <ul className="list-disc text-sm">
                <li>
                  <p className="para">Invest in Projects during 180 days</p>
                </li>
                <li>
                  <p className="para">
                    Access to live online meetings with management of Asset
                    Avenue
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium">270 Days</h2>
              <ul className="list-disc text-sm">
                <li>
                  <p className="para">Invest in Project during 270 days</p>
                </li>
                <li>
                  <p className="para">
                    Receive access tu upcoming projects before they are
                    published
                  </p>
                </li>
                <li>
                  <p className="para">
                    Access to live online meetings with management of Asset
                    Avenue
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium">360 Days</h2>
              <ul className="list-disc text-sm">
                <li>
                  <p className="para">
                    Join Asset Avenue DAO and gain voting rights as a member.
                  </p>
                </li>
                <li>
                  <p className="para">
                    Receive dividends from Asset Avenue DAO.
                  </p>
                </li>
                <li>
                  <p className="para">Invest in Project during 360 days.</p>
                </li>
                <li>
                  <p className="para">
                    Receive access to upcoming projects before they are
                    published.
                  </p>
                </li>
                <li>
                  <p className="para">
                    Access to live online meetings with management of Asset
                    Avenue.
                  </p>
                </li>
              </ul>
            </div>
          </Slot>

          <Slot2>
            <h2 className="text-xl">Staked Amount: </h2>
            <h2 className="text-xl">_ $AAV</h2>
          </Slot2>

          <Slot2>
            <h2 className="text-xl">Wallet Ballance: </h2>
            <h2 className="text-xl">_ $AAV</h2>
          </Slot2>

          <div className="input-container">
            <h3 className="text-xl font-medium">Enter Stake Amount: </h3>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Stake Amount"
            />
          </div>

          <div className="button-container px-[10px]">
            <button className="mt-2 w-full rounded-[10px] bg-brand-100 px-[40px] py-[15px] text-xs font-semibold uppercase hover:bg-green-600">
              Approve
            </button>
          </div>

          <div className="button-container px-[10px]">
            <button className="mt-2 w-full rounded-[10px] bg-brand-100 px-[40px] py-[15px] text-xs font-semibold uppercase hover:bg-green-600">
              Withdraw
            </button>
          </div>
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
  padding: 80px 0;

  @media only screen and (max-width: 1200px) {
    padding: 20px 0;
  }
`;
const Wrap = styled.div`
  height: 100%;
  display: flex;
  padding: 50px 0;

  li::marker {
    color: #3fac55;

    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }

  li {
    margin: 5px 0;
  }
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 40%;
  padding: 0 20px;

  img {
    width: 70%;
    margin-top: 20px;
    text-decoration: underline;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 60%;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }

  .para {
    @media only screen and (max-width: 1200px) {
      text-align: left;
    }
  }

  .input-container {
    position: relative;
    margin: 20px 10px;
  }

  .input {
    width: 100%;
    font-size: 1em;
    padding: 1em 1em;
    border: none;
    border-radius: 6px;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.4);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition:
      background-color 0.3s ease,
      box-shadow 0.3s ease;

    @media only screen and (max-width: 1200px) {
      width: 100%;
    }
  }

  .input:focus {
    outline: none;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.4);
  }

  .input::placeholder {
    color: #fff;
  }

  .highlight {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 3px;
    background-color: rgb(1, 235, 252);
    transition: width 0.3s ease;
    border-radius: 6px;
  }

  .input:focus + .highlight {
    width: 90%;
  }

  /* Optional: Animation on focus */
  @keyframes input-focus {
    from {
      transform: scale(1);
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
    }

    to {
      transform: scale(1.02);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .input:focus {
    animation: input-focus 0.3s ease;
  }

  .button {
    width: 80%;
    height: 40px;
  }

  .button-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }
`;

const Slot = styled.div`
  display: flex;
  padding: 30px 0;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }

  div {
    height: 600px;
    padding-left: 22px;
    padding-top: 10px;
    padding-right: 8px;
    border-right: 1px solid #3fac55;
    border-top: 1px solid #3fac55;

    @media only screen and (max-width: 1200px) {
      height: 350px;
    }
  }
`;

const Slot2 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 15px 10px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background:
    linear-gradient(#212121, #212121) padding-box,
    linear-gradient(145deg, transparent 35%, #3fac55, #3fac55) border-box;
  border: 2px solid transparent;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
