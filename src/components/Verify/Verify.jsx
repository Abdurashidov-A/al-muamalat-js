import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import smsIcon from "../../assets/sms.svg";
import "./Verify.css";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const OTP_LENGTH = 6;

const Verify = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    // formstate: { errors },
  } = useForm({ defaultValues: { email: "", otp: "" } });

  const [otpCode, setOtpCode] = useState("");

  const handleOtpChange = (event) => {
    const numbersOnly = event.target.value
      .replace(/\D/g, "")
      .slice(0, OTP_LENGTH);
    setOtpCode(numbersOnly);
  };

  const onSubmit = async (data) => {
    const submitData = {
      data,
    };

    try {
      await auth.verify(submitData);
      navigate("/");
    } catch {
      toast.error("error");
    }
  };

  return (
    <div className="verify-page">
      <section className="verify-box" aria-label="OTP verification form">
        <a className="verify-brand" href="/" aria-label="AL MUAMALAT home">
          <img
            className="verify-brand-logo"
            src={logo}
            alt="AL MUAMALAT logo"
          />
          <span className="verify-brand-text">AL MUAMALAT</span>
        </a>

        <h1 className="verify-title">Verify OTP</h1>
        <p className="verify-subtitle">
          Enter the 6-digit code sent to your email.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="verify-form">
          <label className="verify-field" htmlFor="otp-code">
            <input
              {...register("otp")}
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
            disabled={otpCode.length !== OTP_LENGTH}
          >
            {"Send code"}
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
    </div>
  );
};

export default Verify;
