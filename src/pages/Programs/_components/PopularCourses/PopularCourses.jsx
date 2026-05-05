import { useForm } from "react-hook-form";
import course1 from "../../../../assets/course1.svg";
import course2 from "../../../../assets/course2.svg";
import course3 from "../../../../assets/course3.svg";
import "./PopularCourses.css";
import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../services/request";
import { toast } from "react-toastify";

const cards = [
  {
    category: "Design",
    title: "Various versions have evolved...",
    reviews: 20,
    image: course1,
    tone: "popular-course-media-peach",
  },
  {
    category: "Business",
    title: "Various versions have evolved...",
    reviews: 102,
    image: course2,
    tone: "popular-course-media-lilac",
  },
  {
    category: "Business",
    title: "Various versions have evolved...",
    reviews: 102,
    image: course3,
    tone: "popular-course-media-violet",
  },
];

const serviceItems = [
  {
    title: "Space for creative ideas",
    text: "Cyber Square nourishes young aspiring minds to get a clear vision of their ideas. We guide them in analyzing and building their vision and ideas into reality.",
  },
  {
    title: "Engaging and fun curriculum",
    text: "Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts thoroughly so that they can perform them on their own. With Cyber Square kids have fun while they learn without frustrations.",
  },
  {
    title: "Professional teaching methods",
    text: "We professionals at Cyber Square, have developed an in-depth understanding in how to teach kids and how to code. Moreover, we believe in exposing kids to real programming languages and professional tools.",
  },
];

const paymentItems = [
  "Space for creative ideas",
  "Engaging and fun curriculum",
  "Professional teaching methods",
  "Learn from AI & Data Science experts",
  "Courses by IIT, NIT, and IIM alumni",
  "UK certification upon completion",
  "Personalized one-to-one training",
];

const PopularCourses = ({ userId, courseId }) => {
  const { handleSubmit } = useForm();

  const { mutate } = useMutation({
    mutationKey: ["payment"],
    mutationFn: (payload) => request.post(`courses/user`, payload),
    onSuccess: () => {
      toast.succes("Success");
    },
    onError: () => {
      toast.error("Error");
    },
  });

  const onSubmit = () => {
    const submitdata = {
      course_id: courseId,
      user_id: userId,
    };
    mutate(submitdata);
  };
  return (
    <section className="popular-courses">
      <header className="popular-courses-header">
        <h2>Most Popular Course</h2>
        <p>
          Expert guidance for managing funds in alignment with Islamic
          principles, helping you make informed, halal investment decisions.
        </p>
      </header>

      <div className="popular-courses-slider">
        <button
          type="button"
          className="popular-courses-nav"
          aria-label="Previous course"
        >
          &#8249;
        </button>

        <div className="popular-courses-cards">
          {cards.map((card, index) => (
            <article
              className="popular-course-card"
              key={`${card.category}-${index}`}
            >
              <div className={`popular-course-media ${card.tone}`}>
                <span className="popular-course-tag">{card.category}</span>
                <img src={card.image} alt={card.category} />
              </div>

              <div className="popular-course-body">
                <h3>{card.title}</h3>
                <div className="popular-course-rating">
                  <span className="popular-course-stars" aria-hidden>
                    ★ ★ ★ ★{" "}
                    <span className="popular-course-stars-muted">★</span>
                  </span>
                  <span>({card.reviews})</span>
                </div>
              </div>

              <div className="popular-course-footer">
                <strong>$ 500</strong>
                <button type="button" aria-label="Open course">
                  ↗
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="popular-courses-nav"
          aria-label="Next course"
        >
          &#8250;
        </button>
      </div>

      <div className="popular-courses-dots" aria-hidden>
        <span className="popular-courses-dot popular-courses-dot-active" />
        <span className="popular-courses-dot" />
        <span className="popular-courses-dot" />
        <span className="popular-courses-dot" />
        <span className="popular-courses-dot" />
      </div>

      <section className="popular-courses-services">
        <article className="popular-courses-services-left">
          <h3>Our Services</h3>
          <ul>
            {serviceItems.map((item) => (
              <li key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="popular-courses-services-right">
          <h3>Payment</h3>
          <ul>
            {paymentItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Purchase Now
          </button>
        </article>
      </section>
    </section>
  );
};

export default PopularCourses;
