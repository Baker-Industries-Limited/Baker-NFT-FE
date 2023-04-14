import "./App.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./bem/header.css";
import "./bem/footer.css";
import "./bem/home.css";
import "./bem/mint.css";
import "./bem/rm.css";
import "./bem/contact.css";
import "./bem/fauset.css";
import "./bem/faq.css";
import "./App.scss";

import { AnimatePresence } from "framer-motion";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  let cursorRef = useRef();
  let cursorRef2 = useRef();
  useEffect(() => {
    // set viewport width, for mobile devices.
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // To stop the app from flashing, we hide the entire body in the css and then show it when the JavaScript loads.
    gsap.to("body", 0, { css: { visibility: "visible" } });
    // custom cursor
    const cursorList = document.addEventListener("mousemove", (e) => {
      cursorRef.current.setAttribute(
        "style",
        `transform: translate3d(${e.pageX - 10}px, ${e.pageY - 10}px, 0px)`
      );
      cursorRef2.current.setAttribute(
        "style",
        `transform: translate3d(${e.pageX + 10}px, ${e.pageY + 10}px, 0px)`
      );
    });

    return () => {
      document.removeEventListener("mousemove", cursorList);
    };
  }, []);
  return (
    <div>
      <BrowserRouter>
        {/* <div ref={cursorRef} className="cursor"></div>
        <div ref={cursorRef2} className="cursor cursor2"></div> */}
        <AnimatePresence>
          <AnimatedRoutes />
        </AnimatePresence>
        <ToastContainer autoClose={15000} />
      </BrowserRouter>
    </div>
  );
}

export default App;
