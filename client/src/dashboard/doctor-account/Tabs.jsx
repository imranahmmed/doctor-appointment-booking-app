import React, { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full mt-0 rounded-md border-0 py-4 font-[500] duration-100`}
        >
          Ovrview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full mt-0 rounded-md border-0 py-4 font-[500] duration-100`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("profile")}
          className={`${
            tab === "profile"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full mt-0 rounded-md border-0 py-4 font-[500] duration-100`}
        >
          Profile
        </button>

        <div className="mt-[50px] md:mt-[100px] w-full flex flex-col gap-3">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 text-[16px] rounded-md text-white"
          >
            Logout
          </button>
          <button className="w-full bg-red-600 p-3 text-[16px] rounded-md text-white">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
