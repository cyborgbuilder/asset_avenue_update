// src/pages/Home.tsx
import {
  Copyright,
  DAO,
  Footer,
  Hero,
  Invest,
  Navbar,
  OwnHouse,
  Projects,
  Team,
  Work,
  BlockchainRealEstate,
  // Countdown
} from "@/components";
import { FC } from "react";

const backgroundStyles = [
  {
    video: "top-0 -z-[13]",
    img: "top-0 -z-[11]",
  },
  {
    video: "top-[23%] -z-[13]",
    img: "top-[23%] -z-[11]",
  },
  {
    video: "top-[43%] -z-[13] -translate-y-1/2",
    img: "top-[43%] -z-[11] -translate-y-1/2",
  },
  {
    video: "bottom-0 -z-[13]",
    img: "bottom-0 -z-[11]",
  },
];

export const Home: FC = () => {
  // const [showPopup, setShowPopup] = useState(true);

  // const handleClosePopup = () => setShowPopup(false);

  return (
    <section className="relative flex w-screen overflow-x-hidden flex-col items-center">
       {/* {showPopup && <Countdown onClose={handleClosePopup} />} */}

      {backgroundStyles.map((style, index) => {
        return (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            src="/videos/bars.mp4"
            className={`pointer-events-none absolute h-screen w-screen object-cover ${style.video}`}
          />
        );
      })}

      {backgroundStyles.map((style, index) => {
        return (
          <img
            key={index}
            src="/images/world.svg"
            alt="map"
            className={`pointer-events-none absolute h-screen object-fill xl:w-[80%] ${style.img}`}
          />
        );
      })}

      <div className="flex w-full max-w-[1066px] flex-col gap-y-16">
        {/* navbar */}
        <Navbar />
        {/* hero section */}
        <Hero />
        {/* how does it work section */}
        <Work />
        <BlockchainRealEstate />
        {/* available passive income projects */}
        <Projects />
        {/* buy your own house with cryptocurrency */}
        <OwnHouse />
        {/* asset avenue dao */}
        <DAO />
        {/* our team */}
        <Team />
        {/* invest */}
        <Invest />
        {/* footer */}
        <Footer />
      </div>
      <Copyright />
    </section>
  );
};
