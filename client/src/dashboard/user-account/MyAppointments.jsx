import React from "react";
import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "../../components/doctors/DoctorCard";
import Loading from "../../components/loader/Loading";
import Error from "../../components/error/Error";

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
            <DoctorCard doctor={doctor} key={doctor.id} />
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
