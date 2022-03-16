import React from "react";
import Home from "./Home";
import ForSale from "./ForSale";
import Favorites from "./Favorites";
import Contact from "./Contact";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";

function Main() {
    
  return (
    <div className="Main">
      <Routes>
        <Route path="/Home" element={ <Home />} />
        <Route path="/ForSale" element={ <ForSale />} />
        <Route path="/Favorites" element={ <Favorites />} />
        <Route path="/Contact" element={ <Contact />} />
        <Route path="/Services" element={ <Services />} />
      </Routes>
    </div>
  );
}

export default Main;
