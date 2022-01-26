import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo-container">
        LOGO
      </Link>
      <div className="options">
        <Link to="/urunler" className="option">
          ÜRÜNLER
        </Link>
        <Link to="/signin">GİRİŞ YAP</Link>
      </div>
    </div>
  );
};

export default Navbar;
