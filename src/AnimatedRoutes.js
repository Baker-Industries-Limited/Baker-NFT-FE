import React from "react";
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Mint from "./pages/Mint";
import Collections from "./pages/Collections";
import Resell from "./pages/Resell";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Roadmap from "./pages/Roadmap";
import Fauset from "./pages/Fauset";
import Home from "./pages/Home";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mint" element={<Mint />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/resell" element={<Resell />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/roadmap" element={<Roadmap />} />
        <Route exact path="/fauset" element={<Fauset />} />
      </Routes>
    </div>
  );
}
