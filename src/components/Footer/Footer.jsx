import footerLogo from "../../assets/footer_logo.svg";
import youtubeIcon from "../../assets/youtube.svg";
import instagramIcon from "../../assets/instagram.svg";
import facebookIcon from "../../assets/facebook.svg";
import twitterIcon from "../../assets/twitter.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="footer-top">
          <a className="footer-brand" href="/" aria-label="Dior design home">
            <img
              className="footer-brand-logo"
              src={footerLogo}
              alt="Dior logo"
            />
            <span className="footer-brand-text">
              Dior
              <br />
              design
            </span>
          </a>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#service">Service</a>
            <a href="#contact">Contact Us</a>
          </nav>

          <div className="footer-socials" aria-label="Social links">
            <a href="#" aria-label="YouTube">
              <img src={youtubeIcon} alt="" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={facebookIcon} alt="" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagramIcon} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-divider" />
        <p className="footer-copy">Copyright Satyam Studio</p>
      </div>
    </footer>
  );
};

export default Footer;
