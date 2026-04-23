import { Link } from "react-router-dom";
import illustration from "../../assets/illustrationimage.png";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/register.svg";
import smsIcon from "../../assets/sms.svg";
import "./Login.css";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
  const auth = useAuth();

  const {
    handleSubmit,
    register,
    // formstate: { errors },
  } = useForm({ defaultValues: { email: "", password: "" } });

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log("data", data);

    auth.login({ email, password }, () => {
      toast.error("Xatolik yuz berdi!");
    });
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
            {/* <p className="register-subtitle">
              Already have an account?
              <a className="register-signin-link" href="#">
                Sign in
              </a>
            </p> */}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="register-form"
            action="#"
            method="post"
          >
            <label className="register-field" htmlFor="register-name">
              <input
                {...register("email")}
                id="register-name"
                name="email"
                type="text"
                placeholder="Enter your email"
              />
              <span className="register-field-icon" aria-hidden>
                <img src={smsIcon} alt="" />
              </span>
            </label>

            <label className="register-field" htmlFor="register-email">
              <input
                {...register("password")}
                id="register-email"
                name="password"
                type="password"
                placeholder="Password"
              />
              <span className="register-field-icon" aria-hidden></span>
            </label>
            <button className="register-submit" type="submit">
              Log in
            </button>
          </form>

          <Link className="register-create-account-link" to={"/register"}>
            <p className="register-subtitle">Create a new account !</p>
          </Link>
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

export default Login;
