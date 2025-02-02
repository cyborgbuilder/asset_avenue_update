import { FC } from "react";
import { Badge, Button, ContentCard, Progress } from "@/components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/animations";

const projectDetails = [
  {
    src: "/images/assets/barcelona/img_1.webp",
    topChildren: (
      <Badge className="rounded-full bg-slate-900 uppercase">Upcoming</Badge>
    ),
    topic: "Coliving Apartment Collection Barcelona",
    description: "Barcelona (Spain)",
    price: 1770500,
    available: 3541,
    pricePerShare: 500,
    apr: 8.5,
    soldPercentage: 0,
    link: "/",
  },
  {
    src: "/images/assets/panama/img_1.png",
    topChildren: (
      <Badge className="rounded-full bg-slate-900 uppercase">Upcoming</Badge>
    ),
    topic: "Prime apartment",
    description: "Panama (Panama)",
    price: "negotiating",
    available: 0,
    pricePerShare: 0,
    apr: 0,
    soldPercentage: 0,
    link: "/",
  },
  {
    src: "/images/assets/miami/img_1.png",
    topChildren: (
      <Badge className="rounded-full bg-slate-900 uppercase">Upcoming</Badge>
    ),
    topic: "Luxury Apartment with Ocean View",
    description: "Miami Beach (USA)",
    price: "negotiating",
    available: 0,
    pricePerShare: 0,
    apr: 0,
    soldPercentage: 0,
    link: "/",
  },
];

export const Projects: FC = () => {
  return (
    <section>
      <motion.div
        variants={fadeUpVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        transition={{ duration: 3 }}
        className="flex flex-col items-center justify-center"
      >
        {/* title */}
        <h2 className="text-center font-Helvetica text-2xl font-semibold md:text-3xl xl:text-5xl">
          Available <span className="text-primary">Passive Income</span>{" "}
          Projects
        </h2>
        {/* content */}
        <div className="mb-10 mt-10 grid w-full grid-cols-1 gap-5 px-3 sm:grid-cols-2 lg:grid-cols-3">
          {projectDetails.map((project, index) => (
            <ContentCard
              key={index}
              src={project.src}
              topChildren={project.topChildren}
            >
              <CardDetails
                topic={project.topic}
                description={project.description}
                price={project.price}
                available={project.available}
                pricePerShare={project.pricePerShare}
                apr={project.apr}
                soldPercentage={project.soldPercentage}
                link={project.link}
              />
            </ContentCard>
          ))}
        </div>

        {/* button for buy shares */}
        <Link to="/market">
          <Button className="rounded-[10px] bg-brand-100 px-[25px] py-[20px] uppercase">
            Buy Shares
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};

const CardDetails: FC<{
  topic: string;
  description: string;
  price: number | string;
  available: number;
  pricePerShare: number;
  apr: number;
  soldPercentage: number;
  link: string;
}> = ({
  topic,
  description,
  price,
  available,
  pricePerShare,
  apr,
  soldPercentage,
  link,
}) => {
  return (
    <div className="flex w-full flex-col items-center">
      <h3 className="text-center text-sm font-semibold">{topic}</h3>
      <h4 className="text-xxxs font-medium">{description}</h4>
      <div className="flex w-full justify-between gap-x-2 pb-2 pt-4">
        <div className="flex flex-col items-center text-xxxs font-semibold">
          <p className="">Price:</p>
          <p className="text-base font-semibold text-black">
            {price.toLocaleString()}
          </p>
          <p className="font-normal uppercase">USDT</p>
        </div>
        <div className="flex flex-col items-center text-xxxs font-semibold">
          <p className="">Available:</p>
          <p className="text-base font-semibold text-black">{available}</p>
          <p className="font-normal uppercase">Shares</p>
        </div>
        <div className="flex flex-col items-center text-xxxs font-semibold">
          <p className="">Price / Share:</p>
          <p className="text-base font-semibold text-black">{pricePerShare}</p>
          <p className="font-normal uppercase">USDT</p>
        </div>
        <div className="flex flex-col items-center text-xxxs font-semibold">
          <p className="">APR:</p>
          <p className="text-base font-semibold text-black">{apr}</p>
          <p className="font-normal uppercase">Percent</p>
        </div>
      </div>
      <div className="relative w-full rounded-sm py-3">
        <Progress
          value={soldPercentage}
          className="h-5 w-full rounded-sm bg-white"
        />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xxs font-medium text-green-500  whitespace-nowrap">
          {soldPercentage}% Sold
        </span>
      </div>
      <Link to={link} className="text-xxs text-black">
        Coming Soon
      </Link>
    </div>
  );
};
