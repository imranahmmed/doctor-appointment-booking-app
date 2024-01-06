import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/images/avatar-icon.png";
import uploadCloudinary from "../utils/uploadCloudinary";
import { BASE_URL } from "../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";
const Registration = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    role: "",
    photo: selectedFile,
  });
  const navigate = useNavigate();

  const handleRegistrationFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    // Later we will use cloudinary
    const data = await uploadCloudinary(file);
    setPreviewUrl(data.url);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/auth/registration`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const { message } = await response.json();
      if (!response.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-5">
            <h3 className="text-headingColor text-[26px] leading-9 font-bold mb-0">
              Create Your <span className="text-primaryColor">Account!</span>
            </h3>
            <p className="text_para text-textColor text-[16px] leading-7 font-medium mb-5 mt-0">
              Please Enter Your all Informations.
            </p>

            <form action="#" onSubmit={submitHandler} className="py-4 md:py-0">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleRegistrationFormChange}
                  className="w-full px-4 py-3 border border-solid border-[#0066ff34] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleRegistrationFormChange}
                  className="w-full px-4 py-3 border border-solid border-[#0066ff34] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleRegistrationFormChange}
                  className="w-full px-4 py-3 border border-solid border-[#0066ff34] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
                  required
                />
              </div>

              <div className="mb-5 flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  You are a :
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleRegistrationFormChange}
                    className="px-4 py-3 focus:outline-none text-[15px] leading-7 text-textColor"
                    required
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>
                <label
                  htmlFor=""
                  className="text-headingColor font-bold text-[16px] leading-7"
                >
                  Gender :
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleRegistrationFormChange}
                    className="px-4 py-3 focus:outline-none text-[15px] leading-7 text-textColor"
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                {selectedFile && (
                  <figure className="w-[60px] h-[60px] rounded-full border-2 bolder-solid border-primaryColor flex items-center justify-center">
                    <img
                      src={previewUrl}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </figure>
                )}

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="avatar"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-textColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload photo
                  </label>
                </div>
              </div>

              <button
                disabled={loading && true}
                type="submit"
                className="btn w-full rounded-md mt-3 py-3"
              >
                {loading ? (
                  <HashLoader size={20} color="#ffffff" />
                ) : (
                  "Register"
                )}
              </button>

              <p className="mt-5 text-textColor">
                Already have an account?
                <Link
                  to="/login"
                  className="text-primaryColor font-medium ml-1"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
