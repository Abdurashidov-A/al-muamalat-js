import { Route, Routes } from "react-router-dom";
// import Homepage from "../components/Homepage/Homepage";
// import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Courses from "../pages/Courses/components/Profile/Profile";
import Programs from "../pages/Programs/Programs";
import React from "react";

const LazyHomepage = React.lazy(
  () => import("../components/Homepage/Homepage"),
);

const LazyLogin = React.lazy(() => import("../components/Login/Login"));

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback="Loading...">
            <LazyHomepage />
          </React.Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <React.Suspense fallback="Loading...">
            <LazyLogin />
          </React.Suspense>
        }
      />
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/programs" element={<Programs />} />
      {/* <Route path="/"/> */}
    </Routes>
  );
};

export default AppRouter;
