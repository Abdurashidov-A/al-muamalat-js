import logo from "../../assets/logo.svg";
import down from "../../assets/down.svg";
import uk from "../../assets/uk.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header className="header-shell">
      <div className="header-top">
        <Link
          className="header-logo-group"
          to="/"
          aria-label="AL MUAMALAT home"
        >
          <img className="header-logo" src={logo} alt="AL MUAMALAT logo" />
          <span className="header-brand">AL MUAMALAT</span>
        </Link>

        <nav className="header-nav" aria-label="Primary navigation">
          <Link className="header-link header-link-active" to="/">
            Home
          </Link>
          <Dropdown className="header-programs-dropdown">
            <Dropdown.Toggle
              variant="link"
              className="header-programs-toggle"
              id="programs-dropdown"
            >
              <span className="header-link header-link-with-caret">
                Programs
                <img
                  className="header-caret-icon"
                  src={down}
                  alt=""
                  aria-hidden
                />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="header-programs-menu">
              <Dropdown.Item href="#">Islamic Finance Basics</Dropdown.Item>
              <Dropdown.Item href="#">Muamalat Contracts</Dropdown.Item>
              <Dropdown.Item href="#">Ethics & Compliance</Dropdown.Item>
              <Dropdown.Item href="#">Advanced Programs</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a className="header-link" href="#">
            Finance tools
          </a>
          <a className="header-link " href="#">
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="header-language"
            type="button"
            aria-label="Select language"
          >
            <span className="header-flag" aria-hidden>
              <img src={uk} alt="" />
            </span>
            <span>ENG</span>
            <img className="header-caret-icon" src={down} alt="" aria-hidden />
          </button>
          <span className="header-divider" aria-hidden />
          <Link to={"/login"}>
            <button className="header-signin" type="button">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
