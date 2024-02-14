import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../components/doctors/DoctorCard";
import Loading from "../../components/loader/Loading";
import Error from "../../components/error/Error";
import { formateDate } from "../../utils/formateDate";
const MyAppointments = () => {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointment/my-appointment`);

  return (
    <div className="">
      {loading && !error && <Loading />}
      {error && !loading && <Error errorMessage={error} />}

      {!loading &&
        !error &&
        (appointments.length !== 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <table className="w-full text-left text-sm text-gray-500 mt-5">
              <thead className="text-sm text-gray-700 capitalize bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Doctor Name
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
                  // console.log(item)
                  <tr key={index}>
                    <th className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap">
                      <img
                        src={item.doctor.photo}
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div className="pl-3">
                        <h2 className="text-base font-semibold m-0">
                          {item.doctor.fullName}
                        </h2>
                        <p className="text-normal text-gray-500 m-0">
                          {item.doctor.email}
                        </p>
                      </div>
                    </th>

                    <td className="px-6 py-3">{item.doctor.gender}</td>
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

            {/* {appointments?.map((doctor) => (
              <DoctorCard doctor={doctor} key={doctor._id} />
            ))} */}
          </div>
        ) : (
          <h3 className="text-headingColor text-[20px] font-semibold mt-5">
            You did not book any appointment yet.
          </h3>
        ))}
    </div>
  );
};

export default MyAppointments;
