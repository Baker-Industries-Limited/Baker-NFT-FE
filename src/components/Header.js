import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="header-bg">
      <div className="header">
        <Link className="atag" to="/">
          <img className="lg" src="./images/lg.svg" alt="logo" />
        </Link>

        <div className="inner-header">
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
                          className="btn1"
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
          <img
            style={{ cursor: "pointer" }}
            onClick={() => changeToggle()}
            src="./images/ham.svg"
            alt="logo"
          />
        </div>
      </div>

      <Sidebar toggle={toggle} />
    </div>
  );
}
