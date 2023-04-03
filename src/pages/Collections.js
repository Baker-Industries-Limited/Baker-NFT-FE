import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useSigner, useAccount } from "wagmi";
import { BigNumber, ethers } from "ethers";
import { NumericFormat } from "react-number-format";
import { toast } from "react-toastify";
import nftABI from "../abis/nft.json";
import rewardABI from "../abis/reward.json";
import marketABI from "../abis/market.json";
import busdABI from "../abis/busd.json";
import {
  marketAddress,
  busdAddress,
  rewardAddress,
  farm100Address,
  farm200Address,
  farm500Address,
} from "../utils/constants";
import axios from "axios";

export default function Collections(props) {
  const { data: signer } = useSigner();
  const amountRef = useRef(0);
  const tokenRef = useRef();
  const selectRef = useRef();
  const selectRef2 = useRef();
  const selectRef3 = useRef();

  const [userNFT, setUSERNFT] = useState([]);
  const [back, setBack] = useState([]);
  const [allowance, setAllowance] = useState(0);
  const [appr, setAppr] = useState(0);
  const [apprN, setApprN] = useState(0);
  const [farm, setFarm] = useState(0);
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);

  const createMarketContract = async () => {
    const marketContract = new ethers.Contract(
      marketAddress,
      marketABI.abi,
      signer
    );
    return marketContract;
  };

  const createNFTContract = async () => {
    const marketContract = new ethers.Contract(
      farm100Address,
      nftABI.abi,
      signer
    );
    return marketContract;
  };
  const createNFT200Contract = async () => {
    const marketContract = new ethers.Contract(
      farm200Address,
      nftABI.abi,
      signer
    );
    return marketContract;
  };
  const createNFT500Contract = async () => {
    const marketContract = new ethers.Contract(
      farm500Address,
      nftABI.abi,
      signer
    );
    return marketContract;
  };

  const createRewardContract = async () => {
    const rewardContract = new ethers.Contract(
      rewardAddress,
      rewardABI.abi,
      signer
    );
    return rewardContract;
  };

  const createBUSDContract = async () => {
    const marketContract = new ethers.Contract(
      busdAddress,
      busdABI.abi,
      signer
    );
    return marketContract;
  };

  const getMyNFTs = async () => {
    const contract = await createMarketContract();
    const nfts = await contract.fetchMyListItems();

    let item;

    const items = await Promise.all(
      nfts.map(async (i) => {
        const marketContract = new ethers.Contract(
          i.nftaddress,
          nftABI.abi,
          signer
        );
        const tokenUri = await marketContract.tokenURI(
          Number(BigNumber.from(i.tokenId))
        );
        const meta = await axios.get(tokenUri);
        const approveAddr = await marketContract.getApproved(i.tokenId);

        item = {
          price: Number(BigNumber.from(i.price)) / 10 ** 18,
          description: meta.data.description,
          image: meta.data.image,
          name: meta.data.name,
          owner: i.owner,
          tokenId: i.tokenId,
          sold: i.sold,
          nftaddress: i.nftaddress,
          listId: i.listId,
          approval: approveAddr,
        };
        return item;
      })
    );

    setUSERNFT(items);
    setBack(items);
  };

  const getReward = async () => {
    const contract1 = await createMarketContract();
    const mynfts = await contract1.fetchMyListItems();

    let item;

    const tokenList = await Promise.all(
      mynfts.map(async (i) => {
        item = {
          tokenId: Number(BigNumber.from(i.tokenId)),
          address: i.nftaddress,
        };
        return item;
      })
    );

    const newList = [];
    tokenList.map((item) => {
      if (item.address === selectRef2.current.value) {
        newList.push(item.tokenId);
      }
    });

    const contract = await createRewardContract();
    const farmReward = await contract._claimReward(
      selectRef2.current.value,
      address,
      newList
    );

    console.log(selectRef2.current.value);

    console.log(Number(BigNumber.from(farmReward)) / 10 ** 18);
    //const hotelReward = await contract._claimHotel(hotelAddress);
    //const realReward = await contract._claimReal(realAddress);

    setFarm(Number(BigNumber.from(farmReward)) / 10 ** 18);
    //setHotel(Number(BigNumber.from(hotelReward)) / 10 ** 18);
    //setReal(Number(BigNumber.from(realReward)) / 10 ** 18);
  };

  const cancel = async (nftaddress, tokenId) => {
    const contract = await createMarketContract();
    const id = toast.loading("Transaction in progress..");
    try {
      const allow = await contract.cancelListing(nftaddress, tokenId);
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

  const claimReward = async () => {
    const contract1 = await createMarketContract();
    const mynfts = await contract1.fetchMyListItems();

    let item;

    const tokenList = await Promise.all(
      mynfts.map(async (i) => {
        item = {
          tokenId: Number(BigNumber.from(i.tokenId)),
          address: i.nftaddress,
        };
        return item;
      })
    );
    const newList = [];
    tokenList.map((item) => {
      if (item.address === selectRef2.current.value) {
        newList.push(item.tokenId);
      }
    });

    const contract = await createRewardContract();
    const id = toast.loading("Transaction in progress..");
    try {
      const allow = await contract.claimReward(
        selectRef2.current.value,
        newList
      );
      await allow.wait();
      toast.update(id, {
        render: "Transaction successfull",
        type: "success",
        isLoading: false,
      });
      setTimeout(() => window.location.reload(), 10000);
    } catch (error) {
      console.log(error);
      toast.update(id, {
        render: "",
        type: "error",
        isLoading: false,
      });
      return toast.error(error.reason);
    }
  };

  const list = async (nftaddress, tokenId, amount) => {
    console.log(amount);
    if (amount === "") {
      return toast.error("Please enter  amount");
    }
    const contract = await createMarketContract();
    const price = ethers.utils.parseEther(amount);
    const id = toast.loading("Transaction in progress..");
    try {
      const allow = await contract.listItem(nftaddress, tokenId, price);
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

  const approveNFT = async (tokenId, price) => {
    console.log(tokenId);
    if (tokenId === "") {
      return toast.error("Please enter  amount");
    }

    let contract;
    console.log(price);

    if (price === 100) {
      contract = await createNFTContract();
    } else if (price === 200) {
      contract = await createNFT200Contract();
    } else if (price === 500) {
      contract = await createNFT500Contract();
    }

    const id = toast.loading("Approval in progress..");
    try {
      const allow = await contract.approve(marketAddress, tokenId);
      await allow.wait();
      toast.update(id, {
        render: "Approval successfull",
        type: "success",
        isLoading: false,
        autoClose: 1000,
        closeButton: true,
      });
      //setTimeout(() => window.location.reload(), 5000);
      const newa = apprN + 1;
      setApprN(newa);
    } catch (error) {
      toast.update(id, {
        render: `${error.reason}`,
        type: "error",
        isLoading: false,
        autoClose: 1000,
        closeButton: true,
      });
    }
  };

  const checkAllow = async (owner, spender) => {
    const contract = await createBUSDContract();
    try {
      const allow = await contract.allowance(owner, spender);
      setAllowance(allow);
    } catch (error) {
      console.log(error);
    }
  };

  const approve = async (amount) => {
    if (amount === "") {
      return toast.error("Please enter  amount");
    }
    const contract = await createBUSDContract();
    const id = toast.loading("Approval in progress..");
    try {
      const allow = await contract.approve(
        marketAddress,
        ethers.utils.parseEther(String(amount))
      );
      await allow.wait();
      toast.update(id, {
        render: "Approval successfull",
        type: "success",
        isLoading: false,
        autoClose: 1000,
        closeButton: true,
      });
      //setTimeout(() => window.location.reload(), 5000);
      const newa = appr + 1;
      setAppr(newa);
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

  const buyout = async (tokenId) => {
    if (tokenId === "") {
      return toast.error("Please enter tokenId");
    }
    const contract = await createMarketContract();
    const id = toast.loading("Transaction in progress..");
    try {
      const allow = await contract.buyOut(
        selectRef3.current.value,
        Number(tokenId)
      );
      await allow.wait();
      toast.update(id, {
        render: "Buyout Successfull",
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

  const checkFilter2 = () => {
    let res;
    if (selectRef.current.value === "BakerFarmNFT ($100)") {
      res = back.filter((item) => item.nftaddress === farm100Address);
      console.log(res);
      setUSERNFT(res);
    } else if (selectRef.current.value === "BakerFarmNFT ($200)") {
      res = back.filter((item) => item.nftaddress === farm200Address);
      setUSERNFT(res);
    } else if (selectRef.current.value === "BakerFarmNFT ($500)") {
      res = back.filter((item) => item.nftaddress === farm500Address);
      setUSERNFT(res);
    } else {
      setUSERNFT(back);
    }
  };

  const search = (name) => {
    const res = back.filter((item) => item.name.includes(name));
    setUSERNFT(res);
  };

  useEffect(() => {
    getMyNFTs();
    checkAllow(address, marketAddress);
    getReward();
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [signer]);

  useEffect(() => {
    getMyNFTs();
    checkAllow(address, marketAddress);
  }, [appr, apprN]);

  return (
    <div>
      <Header />
      <main>
        <section className="mint-section1">
          <div className="mint_text1">My Collections</div>
          <div className="mint_textc2">{userNFT.length} Minted NFTs</div>
          <input
            className="searchc"
            onChange={(evt) => search(evt.target.value)}
            type="search"
            placeholder="Search Nfts or collection name"
          />
        </section>

        <section className="mint-section2">
          <div className="claims">
            <div className="claimbox">
              <div className="claimbox1">
                <div className="claimText1">
                  {" "}
                  <NumericFormat
                    value={farm}
                    displayType={"text"}
                    thousandSeparator=","
                    decimalScale={5}
                  />{" "}
                  BUSD
                </div>
                <div>
                  {" "}
                  <select
                    onChange={getReward}
                    ref={selectRef2}
                    className="snft2"
                  >
                    <option value={farm100Address}>$100 Tiers</option>
                    <option value={farm200Address}>$200 Tiers</option>
                    <option value={farm500Address}>$500 Tiers</option>
                  </select>
                </div>
              </div>
              <div className="mint_text5">Farm NFT Reward</div>

              <button onClick={claimReward} className="nftbut2">
                Claim Rewards
              </button>
            </div>

            <div className="claimbox">
              <div className="claimbox1">
                <div className="claimText1"> Buy Out NFT</div>
                <div>
                  {" "}
                  <select
                    onChange={getReward}
                    ref={selectRef3}
                    className="snft2"
                  >
                    <option value={farm100Address}>$100 Tiers</option>
                    <option value={farm200Address}>$200 Tiers</option>
                    <option value={farm500Address}>$500 Tiers</option>
                  </select>
                </div>
              </div>

              <div className="mint_text5">
                <input
                  className="list2"
                  placeholder="Enter Token ID "
                  ref={tokenRef}
                />
              </div>
              <button
                onClick={() => buyout(tokenRef.current.value)}
                className="nftbut2"
              >
                Claim
              </button>
            </div>
          </div>
          <div className="mint-section2-inner">
            <div className="filterx">
              <div className="filter-text">Filter by</div>
              <select onChange={checkFilter2} ref={selectRef} className="snft">
                <option>All</option>
                <option>BakerFarmNFT ($100)</option>
                <option>BakerFarmNFT ($200)</option>
              </select>
              {/*  <div className="artflex">
                <img
                  onClick={() =>
                    checkFilter("0x76428C58831679F525C9950423DA53e8592df894")
                  }
                  src="./images/art1.svg"
                  alt="art1"
                />
                <img
                  onClick={() =>
                    checkFilter("0x9eC8f57a30cf5b3a68F9E39AdCdff6365f0d4A0e")
                  }
                  src="./images/art2.svg"
                  alt="art2"
                />
                <img
                  onClick={() =>
                    checkFilter("0xC00EC860aa059F450389C7171959F678681350aE")
                  }
                  src="./images/art3.svg"
                  alt="art3"
                />
              </div> */}
            </div>
          </div>

          <div className="nftlist">
            {userNFT.map((item) => {
              return (
                <div className="nft">
                  <img className="nftimg" src={item.image} alt="nft1" />
                  <div className="nftflex">
                    <div>
                      <div className="mint_text3 ">{item.name}</div>
                      <div className="mint_text4">{item.name.slice(0, -3)}</div>
                    </div>
                    <div>
                      <div className="mint_text3 "> {item.price} BUSD</div>
                      <div className="mint_text4">Mint fee</div>
                    </div>
                  </div>

                  {item.sold ? (
                    <div>
                      <input
                        className="list"
                        placeholder="Enter listing price"
                        ref={amountRef}
                      />
                    </div>
                  ) : null}
                  {item.price > Number(BigNumber.from(allowance / 10 ** 18)) ? (
                    <button
                      onClick={() => approve(item.price)}
                      className="nftbut"
                    >
                      Approve
                    </button>
                  ) : item.approval === marketAddress && item.sold ? (
                    <button
                      onClick={(evt) =>
                        list(
                          item.nftaddress,
                          item.tokenId,
                          evt.target.parentElement.children[2].children[0].value
                        )
                      }
                      className="nftbut"
                    >
                      List
                    </button>
                  ) : item.approval !== marketAddress ? (
                    <button
                      onClick={() => approveNFT(item.tokenId, item.price)}
                      className="nftbut"
                    >
                      Approve NFT
                    </button>
                  ) : (
                    <button
                      onClick={() => cancel(item.nftaddress, item.tokenId)}
                      className="nftbut"
                    >
                      Cancel Listing
                    </button>
                  )}
                </div>
              );
            })}

            <div className="mint_textc2">
              {loading === true
                ? "Loading ......."
                : userNFT.length === 0
                ? "No NFTS"
                : ""}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
