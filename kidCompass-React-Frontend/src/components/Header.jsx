import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import "../App.css";

function Header({ setFeedbackOpen }) {
  return (
    <header className="app-header">
      <Link to="/" className="logo-container">
        <img src="/kidcompass_final.svg" alt="" className="logo" />
      </Link>
      <div className="nav-links">
        <div className="nav-items">
          <Link to="/events" className="nav-link">
            Events
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <span className="nav-link" onClick={() => setFeedbackOpen(true)}>
            Feedback
          </span>
        </div>

        <div className="social-apps">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={28} color="#4267B2" />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter size={28} color="#1DA1F2" />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={28} color="#E4405F" />
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
