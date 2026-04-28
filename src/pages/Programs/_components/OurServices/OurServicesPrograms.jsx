import photo from "../../../../assets/ourservicesprograms/photo.png";
import miniPhoto from "../../../../assets/ourservicesprograms/miniphoto.png";
import ukFlag from "../../../../assets/uk.svg";
import "./OurServicesPrograms.css";

const serviceCards = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: "Islamic Fund Management",
  description:
    "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
  students: "+ 40 students",
  startDate: "Start date : 21 December 2024",
  currentPrice: "$ 250",
  oldPrice: "$ 300",
}));

const OurServicesPrograms = () => {
  return (
    <section className="our-services-programs" aria-label="Programs services">
      <header className="our-services-programs-heading">
        <h2>Our services</h2>
        <p>
          Expert guidance for managing funds in alignment with Islamic
          principles, helping you make informed, halal investment decisions.
        </p>
      </header>

      <div className="our-services-programs-grid">
        {serviceCards.map((card) => (
          <article className="our-services-program-card" key={card.id}>
            <div className="our-services-program-card-image-wrap">
              <img
                src={photo}
                alt={card.title}
                className="our-services-program-card-image"
              />
              <div className="our-services-program-card-badge">
                <span className="our-services-program-card-users" aria-hidden>
                  <img src={miniPhoto} alt="" />
                  <img src={miniPhoto} alt="" />
                </span>
                <span>{card.students}</span>
              </div>
            </div>

            <div className="our-services-program-card-body">
              <p className="our-services-program-card-date">{card.startDate}</p>
              <h3>{card.title}</h3>
              <p className="our-services-program-card-description">
                {card.description}
              </p>

              <div className="our-services-program-card-footer">
                <div className="our-services-program-card-price">
                  <strong>{card.currentPrice}</strong>
                  <span>{card.oldPrice}</span>
                </div>
                <button type="button">Enroll Now</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="our-services-programs-bottom">
        <article className="our-services-programs-workshops">
          <h3>Workshops and Spiritual Development</h3>
          <p>
            Participate in our weekly workshops focused on Islamic studies and
            spiritual growth. These sessions are designed to help you strengthen
            your connection with faith and acquire essential skills for daily
            life
          </p>

          <div className="our-services-programs-dots" aria-hidden>
            <span className="our-services-programs-dot active" />
            <span className="our-services-programs-dot" />
            <span className="our-services-programs-dot" />
          </div>
        </article>

        <article className="our-services-programs-consultation">
          <h3>Free consultation</h3>
          <p>
            Leave your phone number, and we will reach out to provide you with
            complete information about our courses.
          </p>

          <form className="our-services-programs-form">
            <input type="text" placeholder="Name" aria-label="Name" />

            <div className="our-services-programs-phone">
              <span className="our-services-programs-flag" aria-hidden>
                <img src={ukFlag} alt="" />
                <small>+44</small>
              </span>
              <input type="tel" placeholder=" " aria-label="Phone number" />
            </div>

            <label className="our-services-programs-agree">
              <input type="checkbox" />
              <span>
                I agree to the use of my personal information for consultation
                purposes.
              </span>
            </label>

            <button type="button">Submit</button>
          </form>
        </article>
      </section>
    </section>
  );
};

export default OurServicesPrograms;
