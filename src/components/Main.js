import React from "react";
import Home from "./Home";
import ForSale from "./ForSale";

function Main() {
    
  return (
    <div className="Main">
      <p>Main Component/Containter: This is where all my content will display</p>
      <Home />
      <ForSale />
      <footer className="">fb instagram twitter Copyright &copy; 2022</footer>
    </div>
  );
}

export default Main;
