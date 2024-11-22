/* eslint-disable @typescript-eslint/no-explicit-any */
// src/utils/wallet.js

declare global {
  interface Window {
    solana: any;
    solflare: any; // Add Solflare wallet to the global window object
  }
}

// Connect to Phantom Wallet
export const connectToPhantomWallet = async () => {
  if (!window.solana || !window.solana.isPhantom) {
    throw new Error("Phantom Wallet not installed");
  }

  try {
    // Connect to Phantom Wallet
    const response = await window.solana.connect();
    const walletAddress = response.publicKey.toString();
    console.log("Connected to Phantom Wallet. Public Key:", walletAddress);

    // Return the wallet address
    return walletAddress;
  } catch (error) {
    console.error("Error connecting to Phantom Wallet:", error);
    throw error;
  }
};

// Check if the Phantom Wallet is already connected
export const isPhantomWalletConnected = async () => {
  if (window.solana && window.solana.isConnected) {
    console.log("Phantom Wallet is already connected. Public Key:", window.solana.publicKey.toString());
    return window.solana.publicKey.toString();
  }
  return null;
};

// Disconnect from Phantom Wallet
export const disconnectFromPhantomWallet = async () => {
  try {
    if (window.solana && window.solana.isConnected) {
      await window.solana.disconnect();
      console.log("Disconnected from Phantom Wallet");
    }
  } catch (error) {
    console.error("Error disconnecting from Phantom Wallet:", error);
  }
};

// Connect to Solflare Wallet
export const connectToSolflareWallet = async () => {
  if (window.solflare && window.solflare.isSolflare) {
    try {
      console.log("Attempting to connect to Solflare...");
      
      // Call connect method and check if the wallet is connected
      const isConnected = await window.solflare.connect();
      
      if (isConnected) {
        // If connected, store the response object
        const response = window.solflare;
        console.log("Connected to Solflare Wallet:", response);
        
        // Now you can access the publicKey
        const publicKey = response.publicKey.toString();
        console.log("Public Key:", publicKey);
        return publicKey;
      } else {
        console.error("Failed to connect to Solflare Wallet.");
      }
    } catch (error) {
      console.error("Error connecting to Solflare Wallet:", error);
    }
  } else {
    console.error("Solflare wallet is not installed or accessible.");
  }
  
};


// Check if the Solflare Wallet is already connected
export const isSolflareWalletConnected = async () => {
  if (window.solflare && window.solflare.isConnected) {
    console.log("Solflare Wallet is already connected. Public Key:", window.solflare.publicKey.toString());
    return window.solflare.publicKey.toString();
  }
  return null;
};

// Disconnect from Solflare Wallet
export const disconnectFromSolflareWallet = async () => {
  try {
    if (window.solflare && window.solflare.isConnected) {
      await window.solflare.disconnect();
      console.log("Disconnected from Solflare Wallet");
    }
  } catch (error) {
    console.error("Error disconnecting from Solflare Wallet:", error);
  }
};
