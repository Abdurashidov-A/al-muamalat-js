import illustration from "../../assets/illustrationimage.png";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/register.svg";
import uzFlag from "../../assets/uz.svg";
import userIcon from "../../assets/user.svg";
import smsIcon from "../../assets/sms.svg";
import arrowDownIcon from "../../assets/arrow-down.svg";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <section className="register-form-panel" aria-label="Registration form">
          <a className="register-brand" href="/" aria-label="AL MUAMALAT home">
            <img
              className="register-brand-logo"
              src={logo}
              alt="AL MUAMALAT logo"
            />
            <span className="register-brand-text">AL MUAMALAT</span>
          </a>

          <div className="register-heading-wrap">
            <h1 className="register-title">Get started</h1>
            <p className="register-subtitle">
              Already have an account?
              <Link className="register-signin-link" to="/login">
                Sign in
              </Link>
            </p>
          </div>

          <form className="register-form" action="#" method="post">
            <label className="register-field" htmlFor="register-name">
              <input
                id="register-name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <span className="register-field-icon" aria-hidden>
                <img src={userIcon} alt="" />
              </span>
            </label>

            <label className="register-field" htmlFor="register-email">
              <input
                id="register-email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <span className="register-field-icon" aria-hidden>
                <img src={smsIcon} alt="" />
              </span>
            </label>
            <label
              className="register-field register-field-country"
              htmlFor="register-country"
            >
              <img
                className="register-field-flag"
                src={uzFlag}
                alt=""
                aria-hidden
              />
              <input
                id="register-country"
                name="country"
                type="text"
                placeholder="Uzbekistan"
              />
              <span
                className="register-field-icon register-field-icon-arrow"
                aria-hidden
              >
                <img src={arrowDownIcon} alt="" />
              </span>
            </label>
            <button className="register-submit" type="submit">
              Log in
            </button>
          </form>
        </section>

        <section className="register-hero-panel" aria-label="Welcome panel">
          <div className="register-ask-card">
            <div className="register-ask-copy">
              <span>Questions?</span>
              <strong>Ask Diyor</strong>
            </div>
            <img className="register-ask-avatar" src={avatar} alt="Diyor" />
          </div>

          <img
            className="register-illustration"
            src={illustration}
            alt="Registration illustration"
          />

          <h2 className="register-hero-title">
            <span className="nowrap">Welcome to Al Muamalat -</span>
            <br />
            <span className="nowrap">Empowering Your Journey in</span>
            <br />
            <span className="nowrap">Islamic Finance </span>
          </h2>
        </section>
      </div>
    </div>
  );
};

export default Register;
