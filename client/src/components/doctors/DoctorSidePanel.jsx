import React from "react";
import { formateTime } from "../../utils/formateTime";
const DoctorSidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  console.log("doctorId", doctorId);
  console.log("ticketPrice", ticketPrice);
  console.log("timeSlots", timeSlots);

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
      <button className="btn rounded-md w-full px-2">Book Appointment</button>
    </div>
  );
};

export default DoctorSidePanel;
