import React from "react";
import Home from "./Home";
import ForSale from "./ForSale";
import Contact from "./Contact";
// import Home from "./Home"
import About from "./About";
// import About from "./About";
import { Routes, Route } from "react-router-dom";

function Main() {
    
  return (
    <div className="Main">
      <p>Main Component/Containter: This is where all my content will display</p>
      {/* <Home />
      <ForSale /> */}

      <Routes>
        <Route path="/Home" element={ <Home />} />
        <Route path="/ForSale" element={ <ForSale />} />
        <Route path="/Contact" element={ <Contact />} />
        <Route path="/About" element={ <About />} />
      </Routes>

      <footer className="">fb instagram twitter Copyright &copy; 2022</footer>
    </div>
  );
}

export default Main;
