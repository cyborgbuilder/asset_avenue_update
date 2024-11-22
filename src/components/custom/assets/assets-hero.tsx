import { FC, useState } from "react";
import { Badge, Button, ImageCard } from "@/components";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Progress } from "@radix-ui/react-progress";

const images = [
  "/images/assets/barcelona/img_1.webp",
  "/images/assets/barcelona/img_2.png",
  "/images/assets/barcelona/img_3.png",
  "/images/assets/barcelona/img_4.png",
];

const statistics = {
  apr: 8.5,
  capitalGains: 72,
  roi: 260,
  pricePerShare: 500,
  shares: 3541,
  total: 1770500,
};

export const AssetsHero: FC = () => {
  const [imageOrder, setImageOrder] = useState({
    first: images[0],
    second: images[1],
    third: images[2],
    fourth: images[3],
  });

  const [form, setForm] = useState({
    shares: "0",
    usdt: "0",
    monthlyPayout: "0.00",
    bank: false,
    wallet: false,
    conditions: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const usdt = value ? `${parseInt(value) * 500}` : "0";
    const monthlyPayout = usdt ? (parseInt(usdt) * statistics.apr) / 1200 : 0;
    setForm((prev) => ({
      ...prev,
      [e.target.name]: value,
      monthlyPayout: monthlyPayout.toFixed(2),
      usdt,
    }));
  };

  const handleNext = () => {
    setImageOrder((prev) => ({
      first: prev.second,
      second: prev.third,
      third: prev.fourth,
      fourth: prev.first,
    }));
  };

  const handlePrevious = () => {
    setImageOrder((prev) => ({
      first: prev.fourth,
      second: prev.first,
      third: prev.second,
      fourth: prev.third,
    }));
  };

  const changeImageWithClick = (index: number) => {
    if (index === 0) return;
    const images = [
      imageOrder.first,
      imageOrder.second,
      imageOrder.third,
      imageOrder.fourth,
    ];
    const leftSide = images.slice(0, index);
    const rightSide = images.slice(index);
    const newImages = [...rightSide, ...leftSide];
    console.log(newImages);
    setImageOrder({
      first: newImages[0],
      second: newImages[1],
      third: newImages[2],
      fourth: newImages[3],
    });
  };

  return (
    <section className="flex h-full w-full max-w-7xl flex-col items-start justify-center gap-10 px-3 md:flex-row xl:px-0">
      {/* left side */}
      <div className="flex h-full w-full flex-col items-center md:w-1/2 md:items-start">
        <div className="relative">
          <ImageCard
            src={imageOrder.first}
            imageClassName="grayscale-[0.5] object-right"
            className="w-full md:h-96 lg:h-[26rem] xl:h-[30rem]"
            topChildren={
              <Badge className="rounded-full bg-slate-900 uppercase">
                Upcoming
              </Badge>
            }
          />
          {/* controls */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-40 p-2 hover:bg-opacity-100 xl:-left-12 xl:bg-transparent"
          >
            <GrPrevious className="text-2xl font-extrabold text-white xl:text-brand-100" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-40 p-2 hover:bg-opacity-100 xl:-right-12 xl:bg-transparent"
          >
            <GrNext className="text-2xl font-extrabold text-white xl:text-brand-100" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-x-6">
          {[
            imageOrder.first,
            imageOrder.second,
            imageOrder.third,
            imageOrder.fourth,
          ].map((image, index) => (
            <ImageCard
              key={index}
              onClick={() => changeImageWithClick(index)}
              src={image}
              imageClassName="object-right rounded-[20px] rounded-tl-none"
              className={`relative h-24 rounded-[20px] rounded-tl-none border-2 shadow-none ${index !== 0 ? "after:absolute after:inset-0 after:block after:h-full after:w-full after:bg-black/40 after:content-['']" : ""}`}
            />
          ))}
        </div>
      </div>
      {/* right side */}
      <div className="h-full w-full md:flex md:w-1/2 md:flex-col xl:ps-8">
        {/* breadcrumb */}
        <p className="text-xs font-medium uppercase">
          Home &gt; available passive income projects &gt; more info
        </p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          Coliving Apartment Collection
        </h2>
        <h3 className="text-xl font-semibold text-primary">
          Barcelona (Spain)
        </h3>
        <div className="mt-4 flex w-full justify-between rounded-lg border border-brand-100 px-4 py-1.5">
          <p className="text-sm font-semibold">Location:</p>
          <p className="text-sm">Available at Launch</p>
        </div>

        <div className="mt-2 flex w-full justify-between rounded-lg border border-brand-100 px-4 py-1.5">
          <p className="text-sm font-semibold">Total Price:</p>
          <p className="text-sm">{statistics.total.toLocaleString()} USDT</p>
        </div>

        {/* details */}
        <div className="mt-6 grid grid-cols-3">
          <div className="flex flex-col items-center border-r-2 border-r-brand-100 text-brand-100">
            <p className="text-xxs font-semibold text-white">APR:</p>
            <p className="pb-2 text-2xl font-medium md:text-4xl xl:text-5xl">
              {statistics.apr}%
            </p>
          </div>
          <div className="flex flex-col items-center border-r-2 border-r-brand-100 text-brand-100">
            <p className="text-xxs font-semibold text-white">Capital Gains</p>
            <p className="pb-2 text-2xl font-medium md:text-4xl xl:text-5xl">
              {statistics.capitalGains}%
            </p>
          </div>
          <div className="flex flex-col items-center text-brand-100">
            <p className="text-xxs font-semibold text-white">
              Return on Investment
            </p>
            <p className="pb-2 text-2xl font-medium md:text-4xl xl:text-5xl">
              {statistics.roi}%
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2">
          <div className="flex flex-col items-center border-r-2 border-r-brand-100 text-brand-100">
            <p className="text-xxs font-semibold text-white">Price / Share</p>
            <p className="text-2xl font-medium md:text-4xl xl:text-5xl">
              {statistics.pricePerShare}
            </p>
            <p className="text-xs uppercase text-white">usdt</p>
          </div>
          <div className="flex flex-col items-center text-brand-100">
            <p className="text-xxs font-semibold text-white">Shares</p>
            <p className="text-2xl font-medium md:text-4xl xl:text-5xl">
              {statistics.shares}
            </p>
            <p className="text-xs uppercase text-white">available</p>
          </div>
        </div>

        {/* sold */}
        <div className="relative w-full rounded-sm py-6">
          <Progress
            value={0}
            className="h-6 w-full rounded-lg border border-brand-100 bg-white"
          />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-medium text-black">
            {0}% Sold
          </span>
        </div>

        {/* inputs */}
        <p className="mb-1 text-sm font-medium">Your Investment:</p>
        <div className="relative grid grid-cols-2 gap-x-3">
          <div className="relative w-full rounded-xl border border-brand-100 text-sm">
            <input
              type="number"
              name="shares"
              id="shares"
              value={form.shares}
              onChange={handleChange}
              max={statistics.shares}
              min={0}
              className="number-input w-full bg-transparent p-1.5 pe-20 ps-3 outline-none"
            />
            <p className="absolute right-5 top-1/2 -translate-y-1/2">
              | Shares
            </p>
          </div>

          <div className="relative w-full rounded-xl border border-brand-100 text-sm">
            <input
              type="text"
              name="usdt"
              id="usdt"
              value={form.usdt}
              disabled
              className="w-full bg-transparent p-1.5 pe-20 ps-3 outline-none"
            />
            <p className="absolute right-5 top-1/2 -translate-y-1/2">| USDT</p>
          </div>
        </div>

        {/* approx payout */}
        <div className="relative mb-5 mt-3 flex w-full justify-between rounded-xl border border-brand-100 px-3 py-1.5 text-sm lg:px-8">
          <p className="">Approximate monthly payout:</p>
          <p className="">{form.monthlyPayout} USDT</p>
        </div>

        {/* confirmation checkboxes */}
        <div className="mb-2 flex gap-x-2">
          <input
            type="checkbox"
            name="bank"
            id="bank"
            onChange={() => setForm((prev) => ({ ...prev, bank: !prev.bank }))}
            checked={form.bank}
            className="relative h-4 w-4 cursor-pointer appearance-none rounded border-2 border-brand-100 bg-transparent fill-transparent after:absolute after:inset-0 after:flex after:h-4 after:w-4 after:-translate-y-1/4 after:items-start after:justify-center after:pb-1 after:font-extrabold checked:border-0 checked:border-transparent checked:bg-brand-100 checked:text-white checked:after:content-['✓'] focus:outline-none"
          />
          <label htmlFor="bank" className="text-xs text-white">
            I agree to the terms and conditions
          </label>
        </div>
        <div className="mb-2 flex gap-x-2">
          <input
            type="checkbox"
            name="wallet"
            id="wallet"
            onChange={() =>
              setForm((prev) => ({ ...prev, wallet: !prev.wallet }))
            }
            checked={form.wallet}
            className="relative h-4 w-4 cursor-pointer appearance-none rounded border-2 border-brand-100 bg-transparent fill-transparent after:absolute after:inset-0 after:flex after:h-4 after:w-4 after:-translate-y-1/4 after:items-start after:justify-center after:pb-1 after:font-extrabold checked:border-0 checked:border-transparent checked:bg-brand-100 checked:text-white checked:after:content-['✓'] focus:outline-none"
          />
          <label htmlFor="wallet" className="text-xs text-white">
            I agree to the terms and conditions
          </label>
        </div>
        <div className="mb-2 flex gap-x-2">
          <input
            type="checkbox"
            name="conditions"
            id="conditions"
            onChange={() =>
              setForm((prev) => ({ ...prev, conditions: !prev.conditions }))
            }
            checked={form.conditions}
            className="relative h-4 w-4 cursor-pointer appearance-none rounded border-2 border-brand-100 bg-transparent fill-transparent after:absolute after:inset-0 after:flex after:h-4 after:w-4 after:-translate-y-1/4 after:items-start after:justify-center after:pb-1 after:font-extrabold checked:border-0 checked:border-transparent checked:bg-brand-100 checked:text-white checked:after:content-['✓'] focus:outline-none"
          />
          <label htmlFor="conditions" className="text-xs text-white">
            Accept{" "}
            <a href="/terms" className="text-brand-100 underline">
              Terms and Conditions
            </a>
          </label>
        </div>

        {/* submit */}
        <Button className="mt-3 rounded-[10px] bg-brand-100 px-[25px] py-[20px] text-xxs font-semibold uppercase">
          Buy Shares
        </Button>

        {/* assistance */}
        <p className="mt-2 text-center text-xxs">
          <span className="me-2 font-semibold">Need assistance?</span>
          Available Monday - Friday 10:00a.m - 06:00p.m (CET)
        </p>
        <div className="mt-4 flex justify-center gap-x-4">
          <Button variant={"ghost"} className="group p-0 hover:bg-transparent">
            <img
              src="/images/whatsapp.svg"
              alt="whatsapp"
              className="group-hover:scale-110"
            />
          </Button>

          <Button variant={"ghost"} className="group p-0 hover:bg-transparent">
            <img
              src="/images/phone.svg"
              alt="phone"
              className="group-hover:scale-110"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
