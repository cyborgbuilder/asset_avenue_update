import styled from "styled-components";

export const HouseForm = () => {
  return (
    <Container>
      <h1 className="header">My House</h1>
      <h1 className="mt-4 text-center font-Helvetica text-lg md:mb-10 md:text-xl xl:text-2xl">
        Ready to turn your dream of buying a home with crypto into reality?
      </h1>
      <Wrap>
        <Left>
          <img src="/images/house-2.png" />
        </Left>
        <Right>
          <h1 className="header2 mt-5 text-center md:mt-0 px-2">
            Reach out to us, and we'll handle the rest.
          </h1>
          <div className="form">
            <div className="input-container">
              <h3 className="font-medium">Your Name: </h3>
              <input
                type="text"
                name="name"
                className="input font-medium"
                placeholder="Enter your name"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">Phone Number: </h3>
              <input
                type="text"
                name="phone"
                className="input font-medium"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">Email: </h3>
              <input
                type="email"
                name="email"
                className="input font-medium"
                placeholder="Enter your E mail"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">Price: </h3>
              <input
                type="text"
                name="price"
                className="input font-medium"
                placeholder="Enter the price"
              />
            </div>

            <div className="input-container">
              <h3 className="font-medium">
                Any info you would like to share with us: <br></br>e.g. link to
                listing, location, important data, etc.
              </h3>
              <textarea
                name="message"
                className="input font-medium"
                placeholder="Any info you would like to share with us"
              />
            </div>

            <div className="flex xl:w-[90%] flex-col justify-between gap-y-4 lg:flex-row lg:items-center">
              <input type="file" className="h-10" />

              <button className="min-w-40 self-center rounded-[10px] bg-brand-100 px-[25px] py-[20px] text-xs font-medium uppercase hover:bg-green-600">
                Send
              </button>
            </div>
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
    padding: 0 10px;
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;
const Wrap = styled.div`
  height: 100%;
  display: flex;
  padding: 40px 0;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    padding: 0;
    padding-top: 80px;
  }
`;
const Left = styled.div`
  width: 50%;
  padding: 40px 40px 40px 0;

  img {
    width: 100%;
    border-radius: 15px;
    box-shadow:
      rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  }

  @media only screen and (max-width: 1200px) {
    width: 100%;
    padding: 8px;
  }
`;

const Right = styled.div`
  width: 50%;

  .button {
    @media only screen and (max-width: 1280px) {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 1280px) {
    width: 100%;
    padding: 0 8px;
  }

  .form {
    border-right: 1px solid #3fac55;
    @media only screen and (max-width: 1280px) {
      padding: 0 8px;
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
