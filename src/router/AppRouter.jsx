import { Route, Routes } from "react-router-dom";
import Register from "../components/Register/Register";
import Programs from "../pages/Programs/Programs";
import React from "react";
import Verify from "../components/Verify/Verify";
import Profile from "../pages/Profile/Profile";

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
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:courseId" element={<Programs />} />
      <Route path="/verify" element={<Verify />} />
    </Routes>
  );
};

export default AppRouter;
