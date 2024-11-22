import { Button, Navbar } from "@/components";
import { FC } from "react";
import { Link } from "react-router-dom";

export const NotFound: FC = () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <div className="relative flex h-screen w-full max-w-[1066px] flex-col items-center justify-center">
        {/* navbar */}
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        <h1 className="text-4xl font-medium md:text-7xl">404</h1>
        <p className="mb-5 font-medium">
          The page you are looking for does not exist.
        </p>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </section>
  );
};
