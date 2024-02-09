import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../loader/Loading";
import Error from "../error/Error";

const DoctorsList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);

  return (
    <>
      {loading && <Loading />}
      {error && <Error errorMessage={error} />}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {doctors.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorsList;
