import { useState } from "react";
import styled from "styled-components";
import { AvailableProjects, PreviousProjects } from "@/components";

export const MarketPlaceProjects = () => {
  const [activePage, setActivePage] = useState("previousProjects");

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setActivePage(
      event.target.checked ? "availableProjects" : "previousProjects",
    );
  };
  return (
    <Container>
      <Wrap>
        <Header>
          <input
            id="checkbox_toggle"
            type="checkbox"
            className="check"
            onChange={handleToggleChange}
          />
          <div className="checkbox w-full max-w-lg text-white">
            <div className="slide w-full">
              <div className="toggle bg-brand-100"></div>
              <label
                className="text !font-medium text-white font-Helvetica"
                htmlFor="checkbox_toggle"
              >
                Available Projects
              </label>
              <label
                className="text !font-medium text-white font-Helvetica"
                htmlFor="checkbox_toggle"
              >
                Previous Projects
              </label>
            </div>
          </div>
        </Header>
        <Body>
          {activePage === "previousProjects" && <AvailableProjects />}
          {activePage === "availableProjects" && <PreviousProjects />}
        </Body>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  backdrop-filter: blur(10px);
  overflow: hidden;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 20px 0;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  .checkbox {
    width: 700px;
    height: 60px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.2);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 30px;
    position: relative;
    color: black;
    overflow: hidden;
    padding: 0 10px;

    @media only screen and (max-width: 1200px) {
      width: 93%;
      font-size: 16px;
    }
  }

  #checkbox_toggle {
    display: none;
  }

  .checkbox .toggle {
    width: 50%;
    height: 50px;
    position: absolute;
    border-radius: 30px;
    left: 5px;
    cursor: pointer;
    transition: 0.4s;
  }

  .checkbox .slide {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
  }

  .checkbox .slide .text {
    font-size: 16px;
    z-index: 100;
    cursor: pointer;

    @media only screen and (max-width: 1200px) {
      font-size: 13px;
    }
  }

  .check:checked + .checkbox .slide .toggle {
    transform: translateX(97.5%);

    @media only screen and (max-width: 1200px) {
      transform: translateX(94.5%);
    }
  }

  .check:checked + .checkbox .slide {
    color: #fff;
  }
`;

const Body = styled.div``;
