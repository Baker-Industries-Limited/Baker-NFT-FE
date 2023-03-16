import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Roadmap() {
  return (
    <div>
      <Header />
      <main className="rmain">
        <div className="rm-text1">Bserve Roadmap 2023</div>

        <section className="section-rm1">
          <div className="c1"></div>
          <div className="c2"></div>
          <div className="c3">
            <div className="rm-text2">
              Phase 1 (Development & Sensitization){" "}
            </div>
            <div className="rm-text3">Social Media Campaign Launch</div>
            <div className="rm-text3">Smart contract development</div>
            <div className="rm-text3">Website Development</div>
            <div className="rm-text3">NFT Preview</div>
          </div>
        </section>

        <section className="section-rm2">
          <div className="c4"></div>
          <div className="c2"></div>
          <div className="c3">
            <div className="rm-text2">Phase 2 (Pre Launch)</div>
            <div className="rm-text3">Private Sale (Seed Phase)</div>
            <div className="rm-text3">Public Pre Sale</div>
            <div className="rm-text3">Launch</div>
            <div className="rm-text3">
              NFT Auction (Earn BUSD from agriculture)
            </div>
          </div>
        </section>

        <section className="section-rm1">
          <div className="c5"></div>
          <div className="c2"></div>
          <div className="c3">
            <div className="rm-text2">Phase 3 (Product/Utility Launch)</div>
            <div className="rm-text3">
              Pre-Plantating activity (Land Cultivation)
            </div>
            <div className="rm-text3">
              Plantating activity (Planting of crops )
            </div>
            <div className="rm-text3">Post-plantating (Harvest)</div>
          </div>
        </section>

        <section className="section-rm2">
          <div className="c6"></div>
          <div className="c2"></div>
          <div className="c3">
            <div className="rm-text2">
              Phase 4 (Additional Product Utility Launch)
            </div>
            <div className="rm-text3">Real Estate Sector (Properties)</div>
          </div>
        </section>

        <section className="section-rm1">
          <div className="c7"></div>
          <div className="c2"></div>
          <div className="c3">
            <div className="rm-text2">
              Phase 5 (Rewards Distribution/Harvest Season)
            </div>
            <div className="rm-text3">
              BUSD rewards distribution from buying farm NFTs and property NFTs
            </div>
          </div>
        </section>

        <section className="section-rm2">
          <div className="c8"></div>
          <div className="c2"></div>
          <div className="c3">
            <div className="rm-text2">Side Attractions</div>
            <div className="rm-text3">Lottery</div>
            <div className="rm-text3">Auto Buy Mechanism</div>
            <div className="rm-text3">DAO Community (Stakeholders)</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
