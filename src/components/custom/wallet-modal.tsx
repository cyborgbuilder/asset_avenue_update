// src/components/WalletModal.js
import styled from "styled-components";

interface WalletModalProps {
  closeModal: () => void;
  handlePhantomConnect: () => void;
  handleSolflareConnect: () => void; // Add Solflare handler
}

const WalletModal: React.FC<WalletModalProps> = ({
  closeModal,
  handlePhantomConnect,
  handleSolflareConnect, // Accept Solflare handler
}) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>

        {/* Phantom Wallet Option */}
        <WalletOption onClick={handlePhantomConnect}>
          <WalletIcon
            src="https://developers.moralis.com/wp-content/uploads/2023/11/Phantom-Wallet.png"
            alt="Phantom Wallet"
          />
          <WalletDetails>
            <WalletName>Phantom Wallet</WalletName>
            <WalletDescription>Connect with Phantom Wallet</WalletDescription>
          </WalletDetails>
        </WalletOption>

        {/* Solflare Wallet Option */}
        <WalletOption onClick={handleSolflareConnect}>
          <WalletIcon
            src="https://play-lh.googleusercontent.com/4E-ouY-jU11F0Y7g5J0cl_rCjxVPzFanY3KS-J_0V5tzQewpqI68rqUAPVCaluk61Cg"
            alt="Solflare Wallet"
          />
          <WalletDetails>
            <WalletName>Solflare Wallet</WalletName>
            <WalletDescription>Connect with Solflare Wallet</WalletDescription>
          </WalletDetails>
        </WalletOption>

      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #2c2c2c;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 10px;
  width: 400px;
  position: relative;
  text-align: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const WalletOption = styled.button`
  display: flex;
  align-items: center;
  background: #1c1c1c;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  margin: 0.2rem 0;
  cursor: pointer;
  width: 100%;
  color: white;
  &:disabled {
    background: #333;
    cursor: not-allowed;
  }
`;

const WalletIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

const WalletDetails = styled.div`
  width: 100%;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const WalletName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const WalletDescription = styled.div`
  font-size: 0.8rem;
  color: #bbb;
  margin: 8px 0;
`;

export default WalletModal;
