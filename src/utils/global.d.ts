declare global {
    interface Window {
      solflare?: {
        isSolflare: boolean;
        connect: () => Promise<{ publicKey: { toString: () => string } }>;
        disconnect: () => Promise<void>;
        publicKey: {
          toString: () => string;
        };
      };
    }
  }
  
  export {};
  