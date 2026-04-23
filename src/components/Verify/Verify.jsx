import { useState } from "react";
import { Link } from "react-router-dom";
import illustration from "../../assets/illustrationimage.png";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/register.svg";
import smsIcon from "../../assets/sms.svg";
import "./Verify.css";

const OTP_LENGTH = 6;

const Verify = () => {
  const [otpCode, setOtpCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOtpChange = (event) => {
    const numbersOnly = event.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH);
    setOtpCode(numbersOnly);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (otpCode.length !== OTP_LENGTH) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Replace with real verification request.
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("OTP sent:", otpCode);
    }, 400);
  };

  return (
    <div className="verify-page">
      <div className="verify-card">
        <section className="verify-form-panel" aria-label="OTP verification form">
          <a className="verify-brand" href="/" aria-label="AL MUAMALAT home">
            <img className="verify-brand-logo" src={logo} alt="AL MUAMALAT logo" />
            <span className="verify-brand-text">AL MUAMALAT</span>
          </a>

          <div className="verify-heading-wrap">
            <h1 className="verify-title">Verify OTP</h1>
            <p className="verify-subtitle">
              Enter the 6-digit code sent to your email.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="verify-form">
            <label className="verify-field" htmlFor="otp-code">
              <input
                id="otp-code"
                name="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                placeholder="Enter 6-digit code"
                value={otpCode}
                onChange={handleOtpChange}
                aria-label="OTP code"
              />
              <span className="verify-field-icon" aria-hidden>
                <img src={smsIcon} alt="" />
              </span>
            </label>

            <button
              className="verify-submit"
              type="submit"
              disabled={otpCode.length !== OTP_LENGTH || isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send code"}
            </button>
          </form>

          <p className="verify-meta">
            Didn’t receive the code?
            <button className="verify-resend" type="button">
              Resend
            </button>
          </p>

          <Link className="verify-back-link" to="/login">
            Back to login
          </Link>
        </section>

        <section className="verify-hero-panel" aria-label="Welcome panel">
          <div className="verify-ask-card">
            <div className="verify-ask-copy">
              <span>Questions?</span>
              <strong>Ask Diyor</strong>
            </div>
            <img className="verify-ask-avatar" src={avatar} alt="Diyor" />
          </div>

          <img
            className="verify-illustration"
            src={illustration}
            alt="Verification illustration"
          />

          <h2 className="verify-hero-title">
            <span className="nowrap">Secure access to Al Muamalat</span>
          </h2>
        </section>
      </div>
    </div>
  );
};

export default Verify;
