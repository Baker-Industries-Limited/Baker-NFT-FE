import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Faq() {
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const [faq4, setFaq4] = useState(false);
  return (
    <div>
      <Header />
      <main className="faq-main">
        <div className="faq-text1">FAQ</div>
        <div className="faq-text2 ">
          We have provided answers to some of the questions you have.
        </div>

        <section className="home-section6">
          <div>
            <div className="faqbox">
              <div className="faq-inner">
                <div className="home_text12">How do I mint my NFT?</div>
                {faq1 === true ? (
                  <img
                    onClick={() => setFaq1(!faq1)}
                    src="./images/minus.svg"
                    alt="remove"
                  />
                ) : (
                  <img
                    onClick={() => setFaq1(!faq1)}
                    src="./images/add.svg"
                    alt="add"
                  />
                )}
              </div>
              {faq1 === true ? (
                <div className="home_text13">
                  You will need to have a wallet installed and set up. You can
                  open a MetaMask Wallet Please visit https://metamask.io on how
                  to open one)
                  <br />
                  <br />
                  In order to mint, connect your wallet and go to the Minting
                  page Click on the NFT you want to mint, approve the
                  transaction on your wallet and Boom! you start earning
                  rewards. You can mint as many NFTs as you like.
                  <br />
                  <br />
                  Ensure you have enough BUSD in your wallet to mint the NFT you
                  want
                </div>
              ) : null}
            </div>

            <div className="faqbox">
              <div className="faq-inner">
                <div className="home_text12">
                  Where does my NFT go after minting?
                </div>
                {faq2 === true ? (
                  <img
                    onClick={() => setFaq2(!faq2)}
                    src="./images/minus.svg"
                    alt="remove"
                  />
                ) : (
                  <img
                    onClick={() => setFaq2(!faq2)}
                    src="./images/add.svg"
                    alt="add"
                  />
                )}
              </div>
              {faq2 ? (
                <div className="home_text13">
                  You will be able to view your minted NFT in your wallet
                  shortly after the transaction has been completed
                </div>
              ) : null}
            </div>

            <div className="faqbox">
              <div className="faq-inner">
                <div className="home_text12">
                  Which token/coin can I use to mint?
                </div>
                {faq3 === true ? (
                  <img
                    onClick={() => setFaq3(!faq3)}
                    src="./images/minus.svg"
                    alt="remove"
                  />
                ) : (
                  <img
                    onClick={() => setFaq3(!faq3)}
                    src="./images/add.svg"
                    alt="add"
                  />
                )}
              </div>
              {faq3 ? (
                <div className="home_text13">
                  You can mint a Bserve NFT with BUSD. Ensure you have enough
                  BUSD in your wallet to be able to successfully mint the NFT
                  you want.
                </div>
              ) : null}
            </div>

            <div className="faqbox">
              <div className="faq-inner">
                <div className="home_text12">How do I start investing?</div>
                {faq4 === true ? (
                  <img
                    onClick={() => setFaq4(!faq4)}
                    src="./images/minus.svg"
                    alt="remove"
                  />
                ) : (
                  <img
                    onClick={() => setFaq4(!faq4)}
                    src="./images/add.svg"
                    alt="add"
                  />
                )}
              </div>
              {faq4 === true ? (
                <div className="home_text13">
                  You start investing by minting any of the NFTs . Go to the
                  minting page and find an NFT you would like to mint
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
