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
import SuccessCheckout from "../pages/payments/SuccessCheckout";
import Clinics from "../pages/clinics/Clinics";
import ClinicDashboard from "../dashboard/clinic-account/ClinicDashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/success-checkout" element={<SuccessCheckout />} />
      <Route path="/clinics" element={<Clinics />} />
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
          <RouteProtector
            element={<UserDashboard />}
            allowedRoles={["patient"]}
          />
        }
      />
      <Route
        path="/doctors/profile/me"
        element={
          <RouteProtector
            element={<DoctorDashboard />}
            allowedRoles={["doctor"]}
          />
        }
      />
      <Route
        path="/clinics/profile/me"
        element={
          <RouteProtector
            element={<ClinicDashboard />}
            allowedRoles={["clinic"]}
          />
        }
      />
    </Routes>
  );
};

export default Routers;
