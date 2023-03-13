import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./bem/header.css";
import "./bem/footer.css";
import "./bem/home.css";
import "./bem/mint.css";
import Mint from "./pages/Mint";
import Collections from "./pages/Collections";
import Resell from "./pages/Resell";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Roadmap from "./pages/Roadmap";

function App() {
  return (
    <div className="full-bg">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mint" element={<Mint />} />
          <Route exact path="/collections" element={<Collections />} />
          <Route exact path="/resell" element={<Resell />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/roadmap" element={<Roadmap />} />
        </Routes>
        <ToastContainer autoClose={15000} />
      </BrowserRouter>
    </div>
  );
}

export default App;
