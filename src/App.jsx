import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Nav from "./components/Nav";
import Rate from "./components/Rate";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Rate />
      <About />
      {/* <Info /> */}
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
