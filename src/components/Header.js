import "./Header.css";
import { Link } from 'react-router-dom'

// import Home from "./Home";
// import ForSale from "./ForSale";
// import Contact from "./Contact";



function Header(props) {
  return (
    <header className="Header">
      <h3>World Famous {props.title}</h3>      
      <h1>Trans Am Time Machines {props.name}</h1>
      <h5>Your One Stop Firebird and Restoration Shop</h5>
      <nav>
        <Link to="/Home">HOME</Link>
        <Link to="/ForSale">FOR SALE</Link>
        <Link to="/About">ABOUT US</Link>
        <Link to="/Contact">CONTACT US</Link>
      </nav>
    </header>
  );
}

export default Header;
