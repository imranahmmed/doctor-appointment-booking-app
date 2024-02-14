import React, { useContext } from "react";
import { formateTime } from "../../utils/formateTime";
import { BASE_URL, token } from "../../config.js";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext.jsx";
import { Link, useNavigate } from "react-router-dom";

const DoctorSidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const { token, role, user } = useContext(authContext);
  const navigate = useNavigate();
  const handleBooking = async () => {
    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (error) {
      if (error.message === "Invalid Token") {
        toast.error(
          "You can't book appointment without login, Please Login First"
        );
        navigate("/login");
      }
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Visit Fee</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} BDT
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-5">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className="text-[15px] leading-6 text-textColor font-semibold">
                {formateTime(item.startTime)} - {formateTime(item.endTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>
      {role === "patient" || role === "null" ? (
        <button onClick={handleBooking} className="btn rounded-md w-full px-2">
          Book Appointment
        </button>
      ) : (
        <Link
          to={`/doctors/profile/me`}
          className="btn rounded-md w-full px-2 block text-center"
        >
          Edit Timeslots
        </Link>
      )}
    </div>
  );
};

export default DoctorSidePanel;
