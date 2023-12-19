import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctors/DoctorDetails";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";

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
    </Routes>
  );
};

export default Routers;
