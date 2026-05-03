import tick from "../../assets/tick.svg";
import PopularCourses from "./_components/PopularCourses/PopularCourses";
import OurServicesPrograms from "./_components/OurServices/OurServicesPrograms";
import "./Programs.css";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../services/request";

const learnItems = [
  "Gain a comprehensive understanding of Islamic finance principles and ethics.",
  "Build a portfolio with 10+ real-world projects in Islamic financial services.",
  "Learn to develop and manage Sharia-compliant financial products.",
  "Master key concepts in Islamic banking, investment, and wealth management.",
  "Understand the fundamentals of risk management in Islamic finance.",
  "Develop skills to work as an Islamic finance consultant.",
];

const whyItems = [
  "Lifetime access",
  "Video lessons",
  "Tests",
  "Projects",
  "Downloadable resources",
  "Access via mobile device",
];

const courseInfoItems = [
  {
    title: "Videodarslar",
    text: "Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.",
  },
  {
    title: "Tasks",
    text: "Test tasks are given at the end of the module. Only students who successfully pass the test will be able to access the lessons in the next module.",
  },
];

const Programs = () => {
  const { courseId } = useParams();
  const { data: courseList } = useQuery({
    queryKey: ["course-list"],
    queryFn: () => request.get("/courses/main").then((res) => res?.data),
  });

  const { data: userData } = useQuery({
    queryKey: ["profile"],
    queryFn: () => request.get("users/me").then((res) => res?.data),
  });

  const userId = userData.data?.user_id;
  console.log("userId", userId);

  const selectedCourse = courseList?.data?.find(
    (course) => course.course_id === courseId,
  );

  return (
    <section className="programs">
      <header className="programs-heading">
        <h1>{selectedCourse.name_uz}</h1>
        <p>
          {selectedCourse.description_uz ? (
            <div
              className="text-base text-gray-600"
              dangerouslySetInnerHTML={{
                __html: selectedCourse?.description_uz
                  ?.replace(/\\n/g, "")
                  ?.replace(/\\"/g, '"'),
              }}
            />
          ) : (
            ""
          )}
        </p>
      </header>

      <div className="programs-content">
        <article className="programs-column programs-column-learn">
          <h2>What you&apos;ll learn</h2>
          <ul className="learn-list">
            {learnItems.map((item) => (
              <li key={item}>
                <span className="learn-list-icon" aria-hidden>
                  <img src={tick} alt="" />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="programs-column programs-column-why">
          <h2>
            Why should you study at
            <br />
            &quot;AL-MUAMALAT&quot;?
          </h2>
          <ul className="why-list">
            {whyItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <section
        className="brief-course-info"
        aria-label="Brief information about the course"
      >
        <h2>Brief information about the course</h2>
        <div className="brief-course-grid">
          {courseInfoItems.map((item) => (
            <article className="brief-course-card" key={item.title}>
              <h3>
                {item.title} <span aria-hidden>▼</span>
              </h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <PopularCourses />
      <OurServicesPrograms />
    </section>
  );
};

export default Programs;
