import React from "react";
import { BrowserRouter } from "react-router-dom";
import Calculator from "./components/Calculator";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

function Wrapper() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <TopBar />
        <Calculator />
        <Contact />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default Wrapper;
