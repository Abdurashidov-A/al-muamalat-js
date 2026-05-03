import logo from "../../assets/logo.svg";
import down from "../../assets/down.svg";
import uk from "../../assets/uk.svg";
import "./Header.css";
import { Link, useParams } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../services/request";

const Header = () => {
  const { data: courseList } = useQuery({
    queryKey: ["course-list"],
    queryFn: () => request.get("/courses/main").then((res) => res?.data),
  });

  const { courseId } = useParams();

  console.log("courseId", courseId);

  console.log("courseList", courseList);

  return (
    <header className="header-shell">
      <div className="header-top">
        <Link
          className="header-logo-group"
          to="/"
          aria-label="AL MUAMALAT home"
        >
          <img className="header-logo" src={logo} alt="AL MUAMALAT logo" />
          <span className="header-brand">AL MUAMALAT</span>
        </Link>

        <nav className="header-nav" aria-label="Primary navigation">
          <Link className="header-link header-link-active" to="/">
            Home
          </Link>
          <Dropdown className="header-programs-dropdown">
            <Dropdown.Toggle
              variant="link"
              className="header-programs-toggle"
              id="programs-dropdown"
            >
              <span className="header-link header-link-with-caret">
                Programs
                <img
                  className="header-caret-icon"
                  src={down}
                  alt=""
                  aria-hidden
                />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu className="header-programs-menu">
              {courseList?.data?.map((course) => (
                <Dropdown.Item
                  key={course.course_id}
                  as={Link}
                  to={`/programs/${course.course_id}`}
                >
                  {course.name_uz} {/* или course.name_en */}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <a className="header-link" href="#">
            Finance tools
          </a>
          <a className="header-link " href="#">
            Contact
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="header-language"
            type="button"
            aria-label="Select language"
          >
            <span className="header-flag" aria-hidden>
              <img src={uk} alt="" />
            </span>
            <span>ENG</span>
            <img className="header-caret-icon" src={down} alt="" aria-hidden />
          </button>
          <span className="header-divider" aria-hidden />
          <Link to={"/login"}>
            <button className="header-signin" type="button">
              Sign in
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
