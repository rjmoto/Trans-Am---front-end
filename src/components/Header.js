import "./Header.css";
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className="Header">
      <h3>World Famous</h3>      
      <h1>Trans Am Time Machines</h1>
      <hr></hr>
      <nav>
        <Link to="/Home">HOME</Link> |  &nbsp;
        <Link to="/ForSale">FOR SALE</Link> |  &nbsp;
        <Link to="/Favorites">FAVORITES</Link> |  &nbsp;
        <Link to="/Services">SERVICES</Link> |  &nbsp;
        <Link to="/Contact">CONTACT US</Link>
      </nav>
    </header>
  );
}

export default Header;
