import styled from "styled-components";

export const Tier = () => {
  return (
    <Container>
      <h1 className="header">Tier System</h1>
      <Wrap>
        <div>
          <h2 className="text-2xl font-medium">Level 01</h2>
          <ul className="list-disc text-sm">
            <li>
              <h1 className="para"></h1>1.000 $AAV Staked
            </li>
            <li>
              <h1 className="para"></h1>Invest up to 30.000 Usdt in Assets
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Level 02</h2>
          <ul className="list-disc text-sm">
            <li>
              <h1 className="para"></h1>2.000 $AAV Staked
            </li>
            <li>
              <h1 className="para"></h1>Invest up to 100.000 Usdt in Assets
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Level 03</h2>
          <ul className="list-disc text-sm">
            <li>
              <h1 className="para"></h1>5.000 $AAV Staked
            </li>
            <li>
              <h1 className="para"></h1>Invest up to 300.000 Usdt in Assets
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Level 04</h2>
          <ul className="list-disc text-sm">
            <li>
              <h1 className="para"></h1>10.000 $AAV Staked
            </li>
            <li>
              <h1 className="para"></h1>Invest up to 700.000 Usdt in Assets
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-medium">Level 05</h2>
          <ul className="list-disc text-sm">
            <li>
              <h1 className="para"></h1>15.000 $AAV Staked
            </li>
            <li>
              <h1 className="para"></h1>No investment limit in Assets
            </li>
          </ul>
        </div>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 30vh;
  // background-image: linear-gradient(to right bottom, #105a37, #11452d, #103122, #0f1f17, #050907);
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Wrap = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 50px 0;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 10px 0;
  }

  div {
    width: 20%;
    height: 220px;
    //padding-left: 19px;
    //padding-right: 10px;
    padding: 20px 28px;
    border-right: 1px solid #3fac55;
    border-top: 1px solid #3fac55;

    @media only screen and (max-width: 1200px) {
      width: 100%;
      height: 200px;
    }
  }

  li::marker {
    color: #3fac55;
  }

  li {
    color: #fff;
    font-size: 18px;
    margin: 10px 0;
  }
`;
