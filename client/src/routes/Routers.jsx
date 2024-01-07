import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctors/DoctorDetails";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import UserDashboard from "../dashboard/user-account/UserDashboard";
import DoctorDashboard from "../dashboard/doctor-account/DoctorDashboard";
import RouteProtector from "./RouteProtector";
import { Routes, Route } from "react-router-dom";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Error404 />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Registration />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/doctors" element={<Doctors />}></Route>
      <Route path="/doctor/:id" element={<DoctorDetails />}></Route>
      {/* <Route
        path="/users/profile/me"
        element={
          <RouteProtector allowedRoles={["patient"]}>
            <UserDashboard />
          </RouteProtector>
        }
      ></Route>
      <Route
        path="/doctors/profile/me/"
        element={
          <RouteProtector allowedRoles={["doctor"]}>
            <DoctorDashboard />
          </RouteProtector>
        }
      ></Route> */}

      <Route
        path="/users/profile/me"
        element={
          <RouteProtector element={<UserDashboard />} allowedRoles={["patient"]} />
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <RouteProtector element={<DoctorDashboard />} allowedRoles={["doctor"]} />
        }
      />
    </Routes>
  );
};

export default Routers;
