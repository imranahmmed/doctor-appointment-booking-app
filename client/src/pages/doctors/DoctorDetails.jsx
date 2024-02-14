import React, { useState } from "react";
import starIcon from "../../assets/images/star.png";
import DoctorAbout from "../../components/doctors/DoctorAbout";
import DoctorFeedback from "../../components/doctors/DoctorFeedback";
import DoctorSidePanel from "../../components/doctors/DoctorSidePanel";
import { BASE_URL } from "../../config";
import Loading from "../../components/loader/Loading";
import Error from "../../components/error/Error";
import useFetchData from "../../hooks/useFetchData";
import { useParams } from "react-router-dom";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const { id } = useParams();

  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  const currentDoctor = doctor && doctor.length > 0 ? doctor[0] : null;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && <Loading />}
        {error && <Error errorMessage={error} />}

        {!error && !loading && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-w-[200px] max-h-[200px]">
                  <img src={currentDoctor?.photo} alt="" />
                </figure>
                <div>
                  <span className="bg-[#ccf0f3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded capitalize">
                    {currentDoctor?.specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                    {currentDoctor?.fullName}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                      <img src={starIcon} alt="" />{" "}
                      {currentDoctor?.averageRating}
                    </span>
                    <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-textColor">
                      (
                      {currentDoctor?.totalPatients
                        ? currentDoctor?.totalPatients
                        : 0}
                      )
                    </span>
                  </div>
                  <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                    {currentDoctor?.bio}
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <button
                  onClick={() => setTab("about")}
                  className={`${
                    tab === "about" &&
                    "border-b border-solid border-primaryColor text-[#0066ff]"
                  } font-semibold py-2 px-5 mr-5 text-[16px] leading-7`}
                >
                  About
                </button>

                <button
                  onClick={() => setTab("feedback")}
                  className={`${
                    tab === "feedback" &&
                    "border-b border-solid border-primaryColor text-[#0066ff]"
                  } font-semibold py-2 px-5 mr-5 text-[16px] leading-7 `}
                >
                  Feedback
                </button>
              </div>

              <div>
                {tab === "about" && (
                  <DoctorAbout
                    fullName={currentDoctor?.fullName}
                    about={currentDoctor?.about}
                    experiences={currentDoctor?.experiences}
                    qualifications={currentDoctor?.qualifications}
                  />
                )}
                {tab === "feedback" && (
                  <DoctorFeedback
                    reviews={currentDoctor?.reviews}
                    totalRating={currentDoctor?.totalRating}
                  />
                )}
              </div>
            </div>

            <div>
              <DoctorSidePanel
                doctorId={currentDoctor?._id}
                ticketPrice={currentDoctor?.ticketPrice}
                timeSlots={currentDoctor?.timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDetails;
