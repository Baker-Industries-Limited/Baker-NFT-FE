import React, { useRef } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useSigner, useAccount } from "wagmi";
import { BigNumber, ethers } from "ethers";
import { toast } from "react-toastify";
import { marketAddress, fausetAddress, busdAddress } from "../utils/constants";
import fausetABI from "../abis/fauset.json";

export default function Fauset() {
  const { data: signer } = useSigner();
  const amountRef = useRef();
  const { address } = useAccount();

  const createFausetContract = async () => {
    const marketContract = new ethers.Contract(
      fausetAddress,
      fausetABI.abi,
      signer
    );
    return marketContract;
  };

  const withdraw = async (amount) => {
    const contract = await createFausetContract();
    const id = toast.loading("Transaction in progress..");
    try {
      const allow = await contract.withdraw(
        address,
        ethers.utils.parseEther(amount)
      );
      await allow.wait();
      toast.update(id, {
        render: "Transaction successfull",
        type: "success",
        isLoading: false,
        autoClose: 1000,
        closeButton: true,
      });
      setTimeout(() => window.location.reload(), 5000);
    } catch (error) {
      console.log(error);
      toast.update(id, {
        render: `${error.reason}`,
        type: "error",
        isLoading: false,
        autoClose: 1000,
        closeButton: true,
      });
    }
  };
  return (
    <div className="full-bg">
      <div className="fauset">
        <div className="mint_text1">GET TEST BUSD</div>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== "loading";
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === "authenticated");

            return (
              <div
                {...(!ready && {
                  "aria-hidden": true,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        className="btn1"
                        onClick={openConnectModal}
                        type="button"
                      >
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported || chain.id !== 97) {
                    return (
                      <button
                        className="btn1"
                        onClick={openChainModal}
                        type="button"
                      >
                        Wrong network - {chain.name}
                      </button>
                    );
                  }

                  return (
                    <div>
                      <button
                        className="fbtn"
                        onClick={openAccountModal}
                        type="button"
                      >
                        {account.displayName}
                        {account.displayBalance
                          ? ` (${account.displayBalance})`
                          : ""}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
        <input
          ref={amountRef}
          placeholder="Enter BUSD Amount"
          className="finput"
        />
        <button
          onClick={() => withdraw(amountRef.current.value)}
          className="fbutton"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}
