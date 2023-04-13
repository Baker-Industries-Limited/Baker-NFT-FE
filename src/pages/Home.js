import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AnimatedLetters from "../components/AnimatedLetters";
import Tilt from "react-parallax-tilt";
import Loader from "react-loaders";
import { motion } from "framer-motion";
import { fadeIn, text1, textVariant } from "../utils/motion";
import PreLoader from "../components/Preloader";

export default function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = [
    "I",
    "n",
    "v",
    "e",
    "s",
    "t",
    "m",
    "e",
    "n",
    "t",
    "",
    "W",
    "i",
    "t",
    "h",
    "o",
    "u",
    "t",
    "",
    "B",
    "o",
    "r",
    "d",
    "e",
    "r",
    "s",
    ".",
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setTimeout(() => {
      //setLetterClass("text-animate-hover");
    }, 6000);
  }, []);

  return (
    <>
      <PreLoader />
      <motion.div className="full-bg">
        <Header />
        <main>
          <section>
            <h2 className="home_text1">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={50}
              />
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 8 }}
              className="home_text2"
            >
              Earn 2X passive income minting unique Bserve NFTs (Non-Fungible
              Tokens)
            </motion.p>

            <Link to="/mint">
              <motion.button
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 8 }}
                className="home-mint"
              >
                Mint NFTs
              </motion.button>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 8.2 }}
              className="nft-home"
            >
              <Tilt>
                <img className="cc" src="./images/c1.png" alt="c1" />
              </Tilt>
              <Tilt>
                <img className="cc" src="./images/card2.png" alt="c1" />
              </Tilt>
              <Tilt>
                <img className="cc" src="./images/c3.png" alt="c3" />
              </Tilt>
            </motion.div>
          </section>

          <section className="home-sec3">
            <div className="home-sec-flex">
              <div className="homeh">
                <div className="home-sec-text4">About Bakerserve</div>
                <div className="home-sec-text5">
                  Bakerserve is the world’s first token revolutionizing
                  Traditional Agriculture, Real Estate to web3. Contrary to
                  popular belief, you do not need a large sum of money to invest
                  in real estate, agriculture and the hospitality industry.
                  Motivated to solve this problem, Bserve provides you with the
                  opportunity to become a fractional owner of hotels, farms, and
                  real estate. Earning annual passive income from any of our
                  four NFT tiers. Users may use the smart contract integrated
                  functions to mint, sell NFTs, without any restrictions.
                </div>
              </div>
              <Tilt>
                <img className="himg" src="./images/card3.png" alt="c1" />
              </Tilt>
            </div>
          </section>

          <section className="home-sec2">
            <div className="home-sec-text3">How to mint</div>

            <div className="home-sec-flex">
              <div className="home-sec-box">
                <div className="home-circle">1</div>
                <div className="home-sec-text1 ">Connect your wallet</div>
                <div className="home-sec-text2">
                  Connect your Metamask wallet or any of your chosen wallet
                </div>
              </div>
              <div className="home-sec-box">
                <div className="home-circle">2</div>
                <div className="home-sec-text1 ">Select NFT</div>
                <div className="home-sec-text2">
                  Browse to find NFT of choice
                </div>
              </div>
              <div className="home-sec-box">
                <div className="home-circle">3</div>
                <div className="home-sec-text1 ">Approve Transaction</div>
                <div className="home-sec-text2">
                  To complete the minting process, you need to click the
                  “Approve” button
                </div>
              </div>
              <div className="home-sec-box">
                <div className="home-circle">4</div>
                <div className="home-sec-text1 ">View Minted NFTs</div>
                <div className="home-sec-text2">
                  You will receive your minted NFT in your wallet in few
                  seconds. You can also view your NFT on “My Collections” page
                </div>
              </div>
            </div>
          </section>

          <section className="home-sec5">
            <div>
              <div className="home-sec-text6">Farm NFTs</div>
              <div className="home-sec-text7">
                Bserve Farms was launched for a larger number of people who do
                not have a great deal of money to invest in agriculture but
                would still like access to high growth potential investments
                that agriculture presents. There are four variations of the Farm
                NFTs and holding one of these will generate 20% or more per
                annum depending on the NFT you mint.
              </div>
              <Link to="/mint">
                <button className="home-sec-but1">Mint Farm NFTs</button>
              </Link>
            </div>
          </section>

          <section>
            <div className="home-sec-text8">
              Join Our Community & Get Early Updates{" "}
            </div>
            <div className="home-sec-text9">
              Community building is our priority, it’s important for us to keep
              forming, engaging and providing income-changing benefits to
              holders of our NFTs.
            </div>
            <div className="sflex">
              <div className="sbox">
                <img src="./images/tele.svg" alt="tele" />
              </div>
              <div className="sbox">
                <img src="./images/insta.svg" alt="tele" />
              </div>
              <div className="sbox">
                <img src="./images/twit.svg" alt="tele" />
              </div>
            </div>
          </section>

          {/*  <section className="home-section2">
          <div>
            <h3 className="home_text3">
              <span className="why">Why</span>{" "}
              <span className="why2">Baker Decentraciti ?</span>
            </h3>
            <p className="home_text4">
              The goal of Baker Decentraciti is to improve the Real Estate
              experience by making the purchase of properties as seamless as
              going to a store to pick up groceries . Collecting any of our NFTs
              will give you different level of access and offer discounts to our
              facilities.
            </p>
          </div>
          <img src="./images/img2.png" alt="img2" />
        </section> */}

          {/*   <section className="home-section3">
          <h3 className="home_text3">
            <span className="why">Mint</span>{" "}
            <span className="why2">Baker NFTs</span>{" "}
          </h3>
          <p className="home_text5">
            Each Baker Decentraciti NFT represents a unique physical property.
            When you purchase one, It transfers ownership of the property to you
            immediately . Super amazing ,isn’t it ?
          </p>

          <div className="home-sectiom3-flex">
            <img src="./images/img3.png" alt="img3" className="img3" />
            <img src="./images/img31.png" alt="img3" className="img3" />
            <img src="./images/img5.png" alt="img3" className="img3" />
          </div>

          <Link to="/mint">
            <button className="btn2">Mint NFT</button>
          </Link>
        </section>
 */}
          {/*   <section className="home-section4">
          <div className="">
            <h4 className="home_text6">Membership</h4>
            <p className="home_text7">
              A rare collection of NFTs where holders of our NFTs, according to
              their membership levels gain free access to our facilities . We
              want to give back a lot to our community and We don’t want you to
              miss out on any of it.
            </p>
          </div>
          <div className="home-section4-inner0">
            <div className="home-section4-inner1">
              <img src="./images/gold.svg" className="goldimg1" alt="gold" />

              <div className="section4-box1">
                <div className="gold">Gold</div>

                <div className="gold2">
                  <div>1. Holders of three (3) or more of our NFTs </div>
                  <div>2. We give 10 % cashback on every successful mint</div>
                  <div>3. Twice in a month free access to our facilities</div>
                </div>
              </div>
            </div>

            <div>
              <div className="home-section4-inner1">
                <img src="./images/gold.svg" className="goldimg2" alt="gold" />

                <div>
                  <div className="gold">Silver</div>

                  <div className="gold2">
                    <div>1. Holders of two (2) of our NFTs </div>
                    <div>2. We give 5 % cashback on every successful mint</div>
                    <div>3. Once in a month free access to our facilities</div>
                  </div>
                </div>
              </div>

              <div className="home-section4-inner1">
                <img src="./images/gold.svg" className="goldimg3" alt="gold" />

                <div>
                  <div className="gold">Bronze</div>

                  <div className="gold2">
                    <div>1. Holders of one (1) of our NFTs </div>
                    <div>2. Once in a month free access to our facilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

          {/*   <section className="home-section5">
          <div>
            <div className="home_text8">
              <div className="c1">Join The</div>
              <div className="c2">Community</div>
            </div>

            <p className="home_text9">
              Community building is our priority, it’s important for us to keep
              forming, engaging and providing mouth-watering benefits to holders
              of our NFTs.
            </p>

            <p className="home_text10">You can write us @Bakerindustries.io</p>

            <p className="home_text9">Telegram | Instagram | Twitter</p>

            <div className="social">
              <img src="./images/telegram.svg" alt="telegram" />
              <img src="./images/instagram.svg" alt="instagram" />
              <img src="./images/twitter.svg" alt="twitter" />
            </div>
          </div>
          <img src="./images/shape.svg" alt="shape" />
        </section> */}

          {/*  <section className="home-section6">
          <h3 className="home_text11">FAQ</h3>
          <div>
            <div className="faqbox">
              <div className="faq-inner">
                <div className="home_text12">When does minting start ?</div>
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
                  Baker Decentraciti NFTs will be available to mint on this
                  website from 3rd quarter, 2022
                </div>
              ) : null}
            </div>

            <div className="faqbox">
              <div className="faq-inner">
                <div className="home_text12">
                  How do I purchase my Property NFT ?
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
                  <p>
                    You will need to have a wallet installed and set up. You
                    need a MetaMask Wallet.
                    <br />
                    Please visit https://metamask.io on how to open one.
                  </p>

                  <p>
                    In order to buy, connect your MetaMask Wallet and go to the
                    Minting section. Click on the property you want to buy,
                    approve the transaction on MetaMask and Boom! you become a
                    property owner.
                  </p>

                  <p>You can buy as many Properties as you like.</p>
                  <p>
                    Ensure you have enough BNB in your wallet to buy the
                    property you want.
                  </p>
                </div>
              ) : null}
            </div>

            <div className="faqbox">
              <div className="faq-inner">
                <div className="home_text12">
                  Where does my NFT go after I purchase one ?
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
                  You’ll be able to view your NFT in your MetaMask Wallet
                  shortly after the transaction has been completed.
                </div>
              ) : null}
            </div>

            <div className="faqbox">
              <div className="faq-inner">
                <div className="home_text12">
                  Which token/coin can I use to mint an NFT ?
                </div>
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
                  You can mint a Baker Decentraciti NFT with BUSD. Ensure you
                  have enough BUSD in your MetaMask to be able to successfully
                  mint the property you want.
                </div>
              ) : null}
            </div>
          </div>
        </section> */}
        </main>
        <Footer />
      </motion.div>
    </>
  );
}
