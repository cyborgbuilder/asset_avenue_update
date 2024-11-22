import { Navbar, Footer, ResellProject, ResellForm } from "@/components";
import { FC } from "react";

export const Resale: FC = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center overflow-x-hidden">
      <div className="relative flex h-screen w-full max-w-[1066px] flex-col items-center">
        {/* navbar */}
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>

        <div className="mt-20 w-full xl:mt-24">
          <ResellProject
            paddingContainerMobile="80px 0 0 0"
            paddingContainer="100px 0 40px 0"
            header=" Investor Resale Hub"
            sub="Unlock Liquidity: Easily sell your investment shares in projects"
          />
          <ResellForm />
          <Footer />
        </div>
      </div>
    </section>
  );
};
