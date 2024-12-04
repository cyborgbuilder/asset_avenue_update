import { FC, useEffect, useState } from "react";
import { Button } from "@/components";
import { Link, useLocation } from "react-router-dom";
import { CgClose, CgMenuMotion } from "react-icons/cg";
import { motion } from "framer-motion";
import { navigationVariants } from "@/animations";
import { 
  connectToPhantomWallet, 
  disconnectFromPhantomWallet, 
  isPhantomWalletConnected, 
  connectToSolflareWallet,
  disconnectFromSolflareWallet, 
  isSolflareWalletConnected
} from "./wallet-connect"; // Update with Solflare functions
import WalletModal from "./wallet-modal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Passive Income Assets", href: "/market" },
  { name: "Investor Resale Hub", href: "/resale" },
  { name: "My House", href: "/house" },
  { name: "Staking", href: "/stake" },
  { name: "Contact Us", href: "/contact" },
  { name: "Dashboard", href: "https://dashboard.assetavenue.capital" },
  { name: "DAO", href: "/dao" },
  { name: "Pre Sale", href: "/pre-sale" },
];

export const Navbar: FC = () => {
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isSolflare, setIsSolflare] = useState<boolean>(false); // Track wallet type

  // Get current page
  const location = useLocation();
  const { pathname } = location;

  // Handle wallet connect
  const handleWalletConnectClick = () => {
    setIsModalOpen(true);
  };

  // Handle Phantom wallet connection
  const handlePhantomConnect = async () => {
    try {  
      const address = await connectToPhantomWallet();
      setWalletAddress(address);
      setIsModalOpen(false);
      setIsSolflare(false);
    } catch (error) {
      console.error("Error connecting to Phantom Wallet", error);
    }
  };

  // Handle Solflare wallet connection
  const handleSolflareConnect = async () => {
    try {
      const address = await connectToSolflareWallet();
      setWalletAddress(address);
      setIsSolflare(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to connect to Solflare Wallet:", error);
    }
  };

  // Handle wallet disconnect
  const handleWalletDisconnect = async () => {
    try {
      if (isSolflare) {
        await disconnectFromSolflareWallet();
      } else {
        await disconnectFromPhantomWallet();
      }
      setWalletAddress(null);
      setIsSolflare(false); // Reset wallet type
    } catch (error) {
      console.error("Error disconnecting wallet", error);
    }
  };

  // Check if any wallet is already connected
  useEffect(() => {
    const checkWalletConnection = async () => {
      const phantomAddress = await isPhantomWalletConnected();
      const solflareAddress = await isSolflareWalletConnected();
      
      if (phantomAddress) {
        setWalletAddress(phantomAddress);
        setIsSolflare(false);
      } else if (solflareAddress) {
        setWalletAddress(solflareAddress);
        setIsSolflare(true);
      }
    };
    checkWalletConnection();
  }, []);

  return (
    <nav className="flex w-full justify-center pt-7">
      <div className="flex w-full justify-between gap-x-5 px-2 text-xxxs font-bold 2xl:px-0 2xl:text-xxs">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo.webp"
            alt="asset avenue"
            className="h-14 w-24 xl:h-16 xl:w-32"
          />
        </Link>

        {/* Wallet Modal */}
        {isModalOpen && (
          <WalletModal
            closeModal={() => setIsModalOpen(false)}
            handlePhantomConnect={handlePhantomConnect}
            handleSolflareConnect={handleSolflareConnect} // Pass Solflare connect
          />
        )}

        {/* Navigation Links */}
        <div className="w-full hidden h-full items-center pb-0 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`px-2 py-2 uppercase ${link.href === pathname ? "text-brand-100" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Wallet Button */}
        <div className="flex items-center">
          <Button
            onClick={walletAddress ? handleWalletDisconnect : handleWalletConnectClick}
            className="hidden rounded-[10px] bg-brand-100 px-[25px] py-[20px] text-xxs font-semibold uppercase xl:flex"
          >
            {walletAddress ? "Disconnect Wallet" : "Connect Wallet"}
          </Button>
          <Button
            onClick={() => setIsSmallMenuOpen(true)}
            variant={"ghost"}
            className="rounded-full p-1 xl:hidden"
          >
            <CgMenuMotion className="h-8 w-8" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={navigationVariants}
        animate={isSmallMenuOpen ? "visible" : "hidden"}
        transition={{ duration: 0.3 }}
        initial="hidden"
        className="fixed inset-0 z-[999] h-screen bg-slate-900 bg-opacity-90 backdrop-blur-sm"
      >
        <div className="flex justify-end pt-5">
          <Button
            variant={"ghost"}
            onClick={() => setIsSmallMenuOpen(false)}
            className="rounded-full p-1"
          >
            <CgClose className="h-8 w-8" />
          </Button>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-5 py-2 font-semibold uppercase"
            >
              {link.name}
            </Link>
          ))}
          <Button
            onClick={walletAddress ? handleWalletDisconnect : handleWalletConnectClick}
            className="rounded-[10px] bg-brand-100 px-[25px] py-[20px] font-semibold uppercase"
          >
            {walletAddress ? "Disconnect Wallet" : "Connect Wallet"}
          </Button>
        </div>
      </motion.div>
    </nav>
  );
};
