import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Lost & Found Network</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/report" className="nav-link">Report Item</Link>
        <Link to="/browse" className="nav-link">Browse Items</Link>
        <Link to="/my-items" className="nav-link">My Items</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
