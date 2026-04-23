import "./OurServices.css";
import icon1 from "../../../../assets/1.svg";
import icon2 from "../../../../assets/2.svg";
import icon3 from "../../../../assets/3.svg";
import icon4 from "../../../../assets/4.svg";
import icon5 from "../../../../assets/5.svg";
import icon6 from "../../../../assets/6.svg";

const services = [
  {
    title: "Islamic Fund Management",
    description:
      "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
    tone: "our-services-card-blue",
    icon: icon1,
  },
  {
    title: "International Relations",
    description:
      "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
    tone: "our-services-card-mint",
    icon: icon2,
  },
  {
    title: "Education and Training",
    description:
      "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
    tone: "our-services-card-pink",
    icon: icon3,
  },
  {
    title: "For Islamic Banks",
    description:
      "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
    tone: "our-services-card-purple",
    icon: icon4,
  },
  {
    title: "Islamic Capital Market",
    description:
      "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
    tone: "our-services-card-gray",
    icon: icon5,
  },
  {
    title: "Shariah Compliance Audit",
    description:
      "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
    tone: "our-services-card-yellow",
    icon: icon6,
  },
];

const OurServices = () => {
  return (
    <section className="our-services" aria-label="Our services">
      <div className="our-services-heading">
        <h2>Our services</h2>
        <p>
          Expert guidance for managing funds in alignment with Islamic
          principles, helping you make informed, halal investment decisions.
        </p>
      </div>

      <div className="our-services-grid">
        {services.map((service) => (
          <article
            key={service.title}
            className={`our-services-card ${service.tone}`}
          >
            <div className="our-services-card-head">
              <span className="our-services-icon">
                <img src={service.icon} alt="" aria-hidden />
              </span>
              <h3>{service.title}</h3>
            </div>

            <p>{service.description}</p>

            <button type="button">Learn more</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
