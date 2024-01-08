import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uploadCloudinary from "../../utils/uploadCloudinary";
import { BASE_URL, token } from "../../config";
import { toast } from "react-toastify";
import HashLoader from "react-spinners/HashLoader";

const ProfileSettings = ({ userData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    bloodGroup: "",
    photo: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      fullName: userData.fullName,
      email: userData.email,
      photo: userData.photo || "",
      gender: userData.gender,
      bloodGroup: userData.bloodGroup,
    }));
  }, [userData]);

  const handleUpdateFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const data = await uploadCloudinary(file);
      setSelectedFile(data);
      setFormData({ ...formData, photo: data.url });
    }
  };

  console.log(selectedFile)


  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/users/${userData._id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const { message } = await response.json();
      if (!response.ok) {
        throw new Error(message);
      }
      setLoading(false);
      toast.success(message);
      navigate("/users/profile/me");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <form action="#" onSubmit={submitHandler} className="py-4 md:py-0 mt-10">
        <div className="mb-5">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleUpdateFormChange}
            className="w-full px-4 py-3 border border-solid border-[#0066ff34] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleUpdateFormChange}
            className="w-full px-4 py-3 border border-solid border-[#0066ff34] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
            readOnly
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleUpdateFormChange}
            className="w-full px-4 py-3 border border-solid border-[#0066ff34] focus:outline-none focus:border-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md"
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <label
            htmlFor=""
            className="text-headingColor font-bold text-[16px] leading-7"
          >
            Blood Group :
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleUpdateFormChange}
              className="px-4 py-3 focus:outline-none text-[15px] leading-7 text-textColor"
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
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
              onChange={handleUpdateFormChange}
              className="px-4 py-3 focus:outline-none text-[15px] leading-7 text-textColor"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 bolder-solid border-primaryColor flex items-center justify-center">
              <img
                src={formData.photo}
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
              {selectedFile ? selectedFile.original_filename : "Upload photo"}
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
            "Update Profile"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
