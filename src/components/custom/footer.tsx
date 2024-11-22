import { FC } from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Passive Income Assets", href: "/market" },
  { name: "Investor Resale Hub", href: "/resale" },
  { name: "My House", href: "/house" },
  { name: "Staking", href: "/stake" },
  { name: "Contact Us", href: "/contact" },
  { name: "Dashboard", href: "https://dashboard.assetavenue.capital" },
  { name: "DAO", href: "/dao" },
];

export const Footer: FC = () => {
  return (
    <footer className="flex w-full flex-col justify-between gap-y-10 border-t border-t-brand-100 bg-black px-20 py-10 sm:flex-row">
      <div className="flex w-full flex-col items-center sm:w-fit">
        <img src="/images/logo.webp" alt="logo" className="mb-2 w-36" />
        <p className="mb-px text-xs">Asset Avenue Pille tn 7/5-13</p>
        <p className="mb-px text-xs">10135 Kesklinna linnaosa</p>
        <p className="mb-px text-xs">Tallin, Harju maakond </p>
        <p className="mb-px text-xs">Estonia</p>
      </div>
      <div className="flex gap-x-10">
        <div className="flex flex-col">
          <div className="mb-2 flex gap-x-2">
            <Link to={"https://t.co/0K1F4zG6md"} className="text-xs">
              <img src="/images/telegram.svg" alt="telegram" className="w-6" />
            </Link>
            <Link to={"https://x.com/asset_avenue"} className="text-xs">
              <img src="/images/twitter.svg" alt="twitter" className="w-6" />
            </Link>
          </div>
          <Link
            target="_blank"
            to={"https://assetavenue.gitbook.io/presale-whitepaper/"}
            className="mb-1 text-xs"
          >
            Whitepaper
          </Link>
          <Link to={"https://assetavenue.gitbook.io/legaltermsprivacysettings/"} className="text-xs">
            Privacy and Legal Terms
          </Link>
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold">Navigation</h3>
          {footerLinks.map((link, index) => {
            return (
              <Link to={link.href} key={index} className="mb-1 text-xs">
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
