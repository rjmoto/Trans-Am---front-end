// import React from "react"
import "./Header.css";

function Header(props) {
  return (
    <header className="Header">
      <h3>World Famous {props.title}</h3>      
      <h1>Trans Am Time Machines {props.name}</h1>
      <h5>Your One Stop Firebird and Restoration Shop</h5>
      <nav>HOME FOR SALE SERVICES ABOUT US CONTACT</nav>
    </header>
  );
}

export default Header;
