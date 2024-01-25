import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Navigate, Route } from "react-router-dom";
import UserDashboard from "../dashboard/user-account/UserDashboard";
import DoctorDashboard from "../dashboard/doctor-account/DoctorDashboard";
const RouteProtector = ({ element, allowedRoles }) => {
  const { token, role } = useContext(authContext);
  const isAllowed = allowedRoles.includes(role);

  //   if (!isAllowed) {
  //     // Redirect to login if not authenticated
  //     return <Navigate to="/login" />;
  //   }

  //   if (allowedRoles && !allowedRoles.includes(role)) {
  //     // Redirect if user does not have the required role
  //     return <Navigate to="/login" />;
  //   }

  //   // Render the protected component
  //   return element;

  const accessableRoute =
    token && isAllowed ? element : <Navigate to="/login" replace={true} />;
  return accessableRoute;
};

export default RouteProtector;
