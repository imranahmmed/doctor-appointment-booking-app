import React, { useState } from "react";
import Loader from "../../components/loader/Loading";
import Error from "../../components/error/Error";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import Tabs from "./Tabs";
import { LuInfo } from "react-icons/lu";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "../../components/doctors/DoctorAbout";
import Profile from "./Profile";
import Appointments from "./Appointments";

const DoctorDashboard = () => {
  const { data, loading, error } = useGetProfile(
    `${BASE_URL}/doctors/profile/me`
  );
  const [tab, setTab] = useState("overview");
  const { about, fullName, experiences, qualifications } = data;
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loader />}
        {!loading && error && <Error errorMessage={error} />}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]">
            <Tabs tab={tab} setTab={setTab} />

            <div className="lg:col-span-2">
              {data.isApproved === "pending" && (
                <div className="flex p-4 text-yellow-800 bg-yellow-50 rounded-lg">
                  <LuInfo className="flex-shrink-0 w-4 h-4" />
                  <div className="mt-[-3px]">
                    <span className="sr-only">Info</span>
                    <div className="ml-3 text-sm font-medium">
                      To get approved, please complete your profile. we&apos;ll
                      manually review your all the information and approve and
                      send you an email within 3days.
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-5">
                {tab === "overview" && (
                  <div>
                    <div className="flex items-start gap-4">
                      <figure className="w-[30%] rounded-lg overflow-hidden">
                        <img src={data?.photo} className="w-full" alt="" />
                      </figure>

                      <div>
                        {data?.specialization && (
                          <span className="bg-[#ccf0f3] text-irisBlueColor inline-block py-1 px-4 lg:py-2 lg:px-6 rounded-lg text-[12px] lg:text-[16px] font-semibold capitalize">
                            {data?.specialization}
                          </span>
                        )}

                        <h3 className="text-[22px] font-bold text-headingColor mt-2">
                          {data?.fullName}
                        </h3>

                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-headingColor text-[14px] lg:text-[16px] font-semibold">
                            <img src={starIcon} alt="" />
                            {data?.averageRating}
                          </span>
                          {data.averageRating > 0 && (
                            <span className=" text-headingColor text-[14px] lg:text-[16px] font-semibold">
                              ({data?.totalRating})
                            </span>
                          )}
                        </div>

                        <p className="text_para font-[14px] lg:max-w-[390px]">
                          {data?.bio}
                        </p>
                      </div>
                    </div>
                    <DoctorAbout
                      fullName={fullName}
                      about={about}
                      experiences={experiences}
                      qualifications={qualifications}
                      setTab={setTab}
                    />
                  </div>
                )}
                {tab === "appointments" && (
                  <Appointments appointments={data?.appointments} />
                )}
                {tab === "profile" && <Profile doctorData={data} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDashboard;
