import React from "react";
import { formateDate } from "../../utils/formateDate";

const Appointments = ({ appointments }) => {
  return (
    <div>
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="text-sm text-gray-700 capitalize bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">
              Patient Name
            </th>
            <th scope="col" className="px-6 py-3">
              Gender
            </th>
            <th scope="col" className="px-6 py-3">
              Payment
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Appointment Date
            </th>
          </tr>
        </thead>
        <tbody>
          {appointments?.map((item, index) => (
            <tr key={index}>
              <th className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                <img
                  src={item.user.photo}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="pl-3">
                  <h2 className="text-base font-semibold m-0">
                    {item.user.fullName}
                  </h2>
                  <p className="text-normal text-gray-500 m-0">
                    {item.user.email}
                  </p>
                </div>
              </th>

              <td className="px-6 py-3">{item.user.gender}</td>
              <td className="px-6 py-3">
                {item.isPaid && (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                    <span>Paid</span>
                  </div>
                )}
                {!item.isPaid && (
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                    <span>Unpaid</span>
                  </div>
                )}
              </td>
              <td className="px-6 py-3">{item.ticketPrice}</td>
              <td className="px-6 py-3">{formateDate(item.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Appointments;
