import {
  Copyright,
  Footer,
  AssetsDescription,
  AssetsHero,
  Navbar,
} from "@/components";
import { FC } from "react";

export const Assets: FC = () => {
  return (
    <div className="relative flex w-full flex-col items-center">
      <video
        autoPlay
        loop
        playsInline
        muted
        src="/videos/bars.mp4"
        className="pointer-events-none absolute top-0 -z-[12] h-screen w-screen object-cover"
      />
      <img
        src="/images/world.svg"
        alt="map"
        className="pointer-events-none absolute top-0 -z-[11] h-screen object-fill xl:w-[80%]"
      />

      <div className="flex w-full max-w-[1066px] flex-col gap-y-16">
        {/* navbar */}
        <Navbar />
        {/* hero */}
        <AssetsHero />
        {/* description */}
        <AssetsDescription />
        {/* footer */}
        <Footer />
      </div>
      <Copyright />
    </div>
  );
};
