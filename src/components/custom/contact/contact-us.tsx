import { useState } from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa6";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const ContactUs = () => {
  const [showAdditionalInput, setShowAdditionalInput] = useState(false);

  return (
    <Container>
      <Wrap>
        <Left>
          <h1 className="header2">Our Contact Info</h1>
          <img src="/images/logo.webp" alt="Logo" />
          <h2>Asset Avenue Pille tn 7/5-13</h2>
          <p>10135 Kesklinna linnaosa</p>
          <p>Tallin</p>
          <p>Harju maakond</p>
          <p>Estonia</p>

          <div className="icon-container">
            <a href='tel:+"+34658368164"'>
              <FaPhone className="icons" />
            </a>
            <a href="https://wa.me/34658368164">
              <FaWhatsapp className="icons" />
            </a>
            <a href="mailto:info@assetavenue.capital">
              <FaEnvelope className="icons" />
            </a>

            <a href="#">
              <FaTelegramPlane className="icons" />
            </a>

            <a href="https://twitter.com/asset_avenue">
              <FaXTwitter className="icons" />
            </a>
          </div>
        </Left>
        <Right>
          <h1 className="header2">Submit your Real Estate Project</h1>
          <p>Sell it and/or find investors</p>

          <Form>
            <div className="input-container">
              <h3 className="font-medium">Name: </h3>
              <input
                type="text"
                name="name"
                className="input font-medium"
                placeholder="Enter name"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">Phone Number: </h3>
              <input
                type="text"
                name="phone"
                className="input font-medium"
                placeholder="Enter phone number"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">E-mail: </h3>
              <input
                type="email"
                name="email"
                className="input font-medium"
                placeholder="Enter email"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">Description: </h3>
              <textarea
                name="description"
                className="input font-medium"
                placeholder="Enter description"
                style={{ height: "100px" }} // Adjust the height as needed
              ></textarea>
            </div>

            {/* Radio buttons to select Yes or No */}
            <div className="input-container">
              <h3 className="font-medium">Is it rented out at the moment?</h3>

              <div className="radio-buttons-container">
                <div className="radio-button">
                  <input
                    name="radio-group"
                    id="radio2"
                    className="radio-button__input"
                    type="radio"
                    onChange={() => setShowAdditionalInput(true)}
                  />
                  <label htmlFor="radio2" className="radio-button__label">
                    <div className="radio-button__custom"></div>
                    Yes
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    name="radio-group"
                    id="radio1"
                    className="radio-button__input"
                    type="radio"
                    onChange={() => setShowAdditionalInput(false)}
                    defaultChecked
                  />
                  <label htmlFor="radio1" className="radio-button__label">
                    <div className="radio-button__custom"></div>
                    No
                  </label>
                </div>
              </div>
            </div>

            {showAdditionalInput && (
              <div className="input-container">
                <h3 className="font-medium">Monthly Rent:</h3>
                <input
                  type="text"
                  name="additionalInfo"
                  className="input font-medium"
                  placeholder="Enter additional information"
                />
              </div>
            )}

            <div className="flex flex-col justify-between gap-y-4 lg:flex-row lg:items-center xl:w-[90%]">
              <input type="file" className="h-10" />

              <button className="min-w-40 self-center rounded-[10px] bg-brand-100 px-[25px] py-[20px] text-xs font-medium uppercase hover:bg-green-600">
                Submit
              </button>
            </div>
          </Form>

          <h1 className="header2">
            Do you want to sell your shares in an asset?+
          </h1>
          <p>Fill out this form and we will help you with the process.</p>

          <Form>
            <div className="input-container">
              <h3 className="font-medium">Name: </h3>
              <input
                type="text"
                name="name"
                className="input font-medium"
                placeholder="Enter name"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">Phone Number: </h3>
              <input
                type="text"
                name="phone"
                className="input font-medium"
                placeholder="Enter phone number"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">E-mail: </h3>
              <input
                type="email"
                name="email"
                className="input font-medium"
                placeholder="Enter email"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">Project you are invested: </h3>
              <input
                type="email"
                name="email"
                className="input font-medium"
                placeholder="Enter project you are invested in"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">
                Amount of shares you would like to sell:{" "}
              </h3>
              <input
                type="email"
                name="email"
                className="input font-medium"
                placeholder="Enter amount of shares you would like to sell"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">Message: </h3>
              <textarea
                name="message"
                className="input font-medium"
                placeholder="Enter Message"
                style={{ height: "100px" }} // Adjust the height as needed
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button className="mt-2 min-w-40 rounded-[10px] bg-brand-100 px-[40px] py-[15px] text-xs font-semibold uppercase hover:bg-green-600">
                Submit
              </button>
            </div>
          </Form>
        </Right>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
  display: flex;
  //align-items: center;
  justify-content: center;
  //background-image: linear-gradient(
    to right top,
    #105a37,
    #11452d,
    #103122,
    #0f1f17,
    #050907
  );
  background: black;

  @media only screen and (max-width: 1280px) {
    padding-top: 40px;
  }
`;
const Wrap = styled.div`
  height: 100%;
  display: flex;
  padding: 70px 0;
  gap: 40px;

  @media only screen and (max-width: 1280px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 30px;
    @media only screen and (max-width: 1280px) {
      margin-bottom: 20px;
    }
  }

  img {
    width: 42%;
    margin: 10px 0;

    @media only screen and (max-width: 1280px) {
      width: 55%;
    }
  }

  .icon-container {
    @media only screen and (max-width: 1280px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 1280px) {
    width: 100%;
  }

  div {
    margin: 25px 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2;
    font-size: 45px;

    @media only screen and (max-width: 1280px) {
      margin: 10px 0;
    }

    .icons {
    width: 40px;
    height: 40px;
      color: #3fac55;
      margin: 20px 20px;
    }
  }
`;

const Right = styled.div`
  width: 60%;

  h1 {
    border-bottom: 1px solid #3fac55;
    border-left: 1px solid #3fac55;
    padding-left: 10px;
    @media only screen and (max-width: 1280px) {
      text-align: center;
    }
  }

  p {
    font-size: 21px;
    padding-top: 7px;
    border-right: 1px solid #3fac55;
    @media only screen and (max-width: 1280px) {
      text-align: center;
      padding-top: 10px;
    }
  }

  h3 {
    font-size: 15px;
  }

  @media only screen and (max-width: 1280px) {
    width: 100%;
  }

  .button {
    @media only screen and (max-width: 1280px) {
      width: 100%;
    }
  }

  .input-container {
    position: relative;
    padding: 10px 0;
    font-family: "Titillium Web", sans-serif;
  }

  .input {
    width: 90%;
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

    @media only screen and (max-width: 1280px) {
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

  .radio-buttons-container {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .radio-button {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }

  .radio-button__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  .radio-button__label {
    display: inline-block;
    padding-left: 30px;
    margin-bottom: 10px;
    position: relative;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .radio-button__custom {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #3fac55;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .radio-button__input:checked + .radio-button__label .radio-button__custom {
    transform: translateY(-50%) scale(0.9);
    border: 5px solid #3fac55;
    color: #4c8bf5;
  }

  .radio-button__input:checked + .radio-button__label {
    color: #3fac55;
  }

  .radio-button__label:hover .radio-button__custom {
    transform: translateY(-50%) scale(1.2);
    border-color: #3fac55;
    box-shadow: 0 0 10px #4c8bf580;
  }

  input[type="file"]::file-selector-button {
    border-radius: 4px;
    padding: 0 16px;
    height: 40px;
    margin-bottom: 20px;
    cursor: pointer;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.4);
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.16);
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    margin-right: 16px;
    transition: background-color 200ms;
  }

  /* file upload button hover state */
  input[type="file"]::file-selector-button:hover {
    background-color: #f3f4f6;
  }

  /* file upload button active state */
  input[type="file"]::file-selector-button:active {
    background-color: #e5e7eb;
  }
`;

const Form = styled.div`
  border-right: 1px solid #3fac55;

  @media only screen and (max-width: 1280px) {
    padding: 0 10px;
  }
`;
