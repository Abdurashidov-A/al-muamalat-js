import course1 from "../../assets/course1.svg";
import course2 from "../../assets/course2.svg";
import course3 from "../../assets/course3.svg";
import "./Courses.css";

const baseCards = [
  {
    title: "Various versions have evolved...",
    category: "Design",
    reviews: 20,
    image: course1,
    tone: "course-card-peach",
  },
  {
    title: "Various versions have evolved...",
    category: "Business",
    reviews: 102,
    image: course2,
    tone: "course-card-lilac",
  },
  {
    title: "Various versions have evolved...",
    category: "Business",
    reviews: 102,
    image: course3,
    tone: "course-card-violet",
  },
];

const cards = [...baseCards, ...baseCards, ...baseCards];

const Courses = () => {
  return (
    <div className="course-catalog">
      {cards.map((course, index) => (
        <article className="course-card" key={`${course.category}-${index}`}>
          <div className={`course-card-media ${course.tone}`}>
            <span className="course-card-tag">{course.category}</span>
            <img src={course.image} alt={course.category} />
          </div>

          <div className="course-card-body">
            <h3>{course.title}</h3>
            <div className="course-card-rating">
              <span className="course-card-stars" aria-hidden>
                ★ ★ ★ ★ <span className="course-card-star-muted">★</span>
              </span>
              <span>({course.reviews})</span>
            </div>
          </div>

          <div className="course-card-footer">
            <strong>$ 500</strong>
            <button type="button" aria-label="Open course">
              ↗
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Courses;
