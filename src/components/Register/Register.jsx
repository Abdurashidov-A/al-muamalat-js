import illustration from "../../assets/illustrationimage.png";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/register.svg";
import userIcon from "../../assets/user.svg";
import smsIcon from "../../assets/sms.svg";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Register = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
    }, 
  });

  const onSubmit = async (data) => {
    const { first_name, last_name, email, phone_number, password } = data;
    console.log("data", data);
    try {
      await auth.register({
        first_name,
        last_name,
        email,
        phone_number,
        password,
      });
      localStorage.setItem("verifyEmail", email);
      navigate("/verify", { state: { email } });
    } catch {
      toast.error("error");
    }
  };
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

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form"
            action="#"
            method="post"
          >
            <label className="register-field" htmlFor="register-name">
              <input
                {...register("first_name")}
                id="register-name"
                name="first_name"
                type="text"
                placeholder="Enter your name"
              />
              <span className="register-field-icon" aria-hidden>
                <img src={userIcon} alt="" />
              </span>
            </label>

            <label className="register-field" htmlFor="register-last-name">
              <input
                {...register("last_name")}
                id="register-last-name"
                name="last_name"
                type="text"
                placeholder="Enter your last name"
              />
              <span className="register-field-icon" aria-hidden>
                <img src={userIcon} alt="" />
              </span>
            </label>

            <label className="register-field" htmlFor="register-email">
              <input
                {...register("email")}
                id="register-email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <span className="register-field-icon" aria-hidden>
                <img src={smsIcon} alt="" />
              </span>
            </label>

            <label className="register-field" htmlFor="register-phone-number">
              <input
                {...register("phone_number")}
                id="register-phone-number"
                name="phone_number"
                type="tel"
                placeholder="Enter your phone number"
              />
              <span className="register-field-icon" aria-hidden>
                <img src={smsIcon} alt="" />
              </span>
            </label>

            <label className="register-field" htmlFor="register-password">
              <input
                {...register("password")}
                id="register-password"
                name="password"
                type="password"
                placeholder="Create password"
              />
              <span className="register-field-icon" aria-hidden></span>
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
