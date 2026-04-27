import opinion from "../../assets/opinion.svg";
import student from "../../assets/student.png";
import calendar from "../../assets/calendar.svg";
import star1 from "../../assets/star 1.svg";
import star2 from "../../assets/star 2.svg";
import star3 from "../../assets/star 3.svg";
import star4 from "../../assets/star 4.svg";
import star5 from "../../assets/star 5.svg";
import Header from "../Header/Header";
import OurServices from "./components/OurServices/OurServices";
import "./Homepage.css";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />

      <section className="homepage-hero">
        <div className="homepage-section">
          <div className="homepage-copy">
            <p className="homepage-pill">
              Seeking Knowledge is an Obligation in Islam
            </p>

            <h1 className="homepage-title">
              Enhance Your
              <br />
              <span className="nowrap">Understanding of Islamic</span>
              <br />
              <span className="nowrap">Ethics with Al-Muamalat</span>
            </h1>

            <div className="homepage-opinion-row">
              <button className="homepage-opinion-button" type="button">
                STUDENT&apos;S OPINON
              </button>

              <img
                className="homepage-opinion-avatars"
                src={opinion}
                alt="Student opinions"
              />

              <div className="homepage-rating">
                <span className="homepage-stars" aria-label="4 out of 5 stars">
                  &#9733;&#9733;&#9733;&#9733;&#9734;
                </span>
                <span className="homepage-reviews">(10k+ Reviews)</span>
              </div>
            </div>
          </div>

          <div className="homepage-stat-card">
            <span className="homepage-stat-icon" aria-hidden>
              <img src={calendar} alt="calendar" />
            </span>
            <div className="homepage-stat-text">
              <span className="homepage-stat-number">250k</span>
              <span className="homepage-stat-caption">Assisted Student</span>
            </div>
          </div>

          <img
            className="homepage-star homepage-star-1"
            src={star1}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-2"
            src={star2}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-3"
            src={star3}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-4"
            src={star4}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-5"
            src={star5}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-6"
            src={star1}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-7"
            src={star2}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-8"
            src={star3}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-9"
            src={star4}
            alt=""
            aria-hidden
          />
          <img
            className="homepage-star homepage-star-10"
            src={star5}
            alt=""
            aria-hidden
          />

          <img
            className="homepage-student-image"
            src={student}
            alt="Student with books"
          />
        </div>
      </section>

      <div className="homepage-slider-indicator" aria-hidden>
        <span className="homepage-indicator-active" />
        <span className="homepage-indicator-dot" />
        <span className="homepage-indicator-dot" />
        <span className="homepage-indicator-dot" />
      </div>

      <OurServices />
      <Footer />
    </div>
  );
};

export default Homepage;
