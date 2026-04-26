import "./Profile.css";
import user from "../../assets/user.svg";
import Courses from "../Courses/Courses";
import { Form, Tab, Tabs } from "react-bootstrap";

const Profile = () => {
  return (
    <main className="courses-page">
      <Tabs defaultActiveKey="profile" className="courses-tabs" mountOnEnter>
        <Tab eventKey="profile" title="Profile">
          <section className="courses-modal" aria-label="Profile form">
            <div className="courses-modal-head">
              <div className="courses-user">
                <img className="courses-avatar" src={user} alt="Alexa Rawles" />
                <h1>Alexa Rawles</h1>
              </div>
              <button className="courses-save-btn" type="button">
                Save
              </button>
            </div>

            <Form className="courses-form">
              <div className="courses-form-grid">
                <Form.Group className="courses-field" controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    className="courses-input"
                    type="text"
                    placeholder="Your First Name"
                  />
                </Form.Group>

                <Form.Group className="courses-field" controlId="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    className="courses-input"
                    type="text"
                    placeholder="Your Last Name"
                  />
                </Form.Group>

                <Form.Group className="courses-field" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    className="courses-input"
                    type="text"
                    placeholder="Enter Your Address"
                  />
                </Form.Group>

                <Form.Group className="courses-field" controlId="birthday">
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control
                    className="courses-input"
                    type="text"
                    placeholder="Enter Your Birthday"
                  />
                </Form.Group>
              </div>
            </Form>
          </section>
        </Tab>

        <Tab eventKey="courses" title="Courses">
          <section className="courses-modal" aria-label="Courses tab">
            <Courses />
          </section>
        </Tab>
      </Tabs>
    </main>
  );
};

export default Profile;
