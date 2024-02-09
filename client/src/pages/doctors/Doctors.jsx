import React, { useEffect, useState } from "react";
import DoctorCard from "../../components/doctors/DoctorCard";
import Testimonial from "../../components/testimonial/Testimonial";

import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/loader/Loading";
import Error from "../../components/error/Error";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setdebounceQuery] = useState("");

  const handleSearch = () => {
    setQuery(query.trim());
    console.log("handle Search");
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setdebounceQuery(query);
    }, 700);
  
    return () => clearTimeout(timeOut);
  }, [query]);
  

  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search by doctor name or speciality"
              value={query}
              onChange={(e) => setQuery(e.target.value.trim())}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loading />}
          {error && <Error errorMessage={error} />}
          {!error && !loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-[30px]">
              {doctors.map((doctor) => (
                <DoctorCard doctor={doctor} key={doctor._id} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/*==============Testimonial Section Start============== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">What out patients say</h2>
            <p className="text_para text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/*==============Testimonial Section End============== */}
    </>
  );
};

export default Doctors;
