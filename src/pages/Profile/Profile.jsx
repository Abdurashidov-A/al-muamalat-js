import "./Profile.css";
import user from "../../assets/user.svg";
import Courses from "../Courses/Courses";
import { Form, Tab, Tabs } from "react-bootstrap";
import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from "../../services/request";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Profile = () => { 
  const { data: userData } = useQuery({
    queryKey: ["profile"],
    queryFn: () => request.get("users/me").then((res) => res?.data),
  });

  const profile = userData?.data;

  const { register, handleSubmit } = useForm();

  const { mutate } = useMutation({ 
    mutationKey: ["mutate-profile"],
    mutationFn: (payload) =>
      request.put(`/users/${userData?.data?.user_id}`, payload),
    onSuccess: () => {
      toast.success("User updated successfully");
    },
    onError: () => {
      toast.error("Failed");
    },
  });

  const onSubmit = (data) => {
    console.log("data", data);
    mutate(data);
  };

  return (
    <main className="courses-page">
      <Tabs defaultActiveKey="profile" className="courses-tabs" mountOnEnter>
        <Tab eventKey="profile" title="Profile">
          <section className="courses-modal" aria-label="Profile form">
            <div className="courses-modal-head">
              <div className="courses-user">
                <img
                  className="courses-avatar"
                  src={profile?.img || user}
                  alt="Alexa Rawles"
                />
                <h1>{profile?.full_name || "User"}</h1>
              </div>
              <button
                className="courses-save-btn"
                type="submit"
                form="profile-form"
              >
                Save
              </button>
            </div>

            <Form
              id="profile-form"
              className="profile-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="courses-form-grid">
                <Form.Group className="courses-field" controlId="firstName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    {...register("full_name")}
                    name="full_name"
                    className="courses-input"
                    type="text"
                    placeholder="Your Full Name"
                  />
                </Form.Group>

                <Form.Group className="courses-field" controlId="lastName">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    {...register("phone_number")}
                    name="phone_number"
                    className="courses-input"
                    type="text"
                    placeholder="Your Phone Number"
                  />
                </Form.Group>

                <Form.Group className="courses-field" controlId="address">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    {...register("password")}
                    name="password"
                    className="courses-input"
                    type="text"
                    placeholder="Enter Password"
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
